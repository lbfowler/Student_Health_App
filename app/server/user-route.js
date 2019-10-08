const express  = require('express');
const router = express.Router();
const md5 = require('md5');
const uuidv1 = require('uuid/v1');
const nedb = require("nedb");

var currentDir = __dirname;
// User profile db stores "static" information
// like credentials, name, gender which aren't changed frequently
// the reason I seperate it with userDataDB is because
// I want to keep it small so we can backup it easily

// userProfileDB structure
// I dont store the real password for security reason
// one raw for one user, need to be changed in the furture
// userProfileDB {{username: null, hashedPassword: null, email: null, name: null}, }
// one user can have mutiple access tokens

const userProfileDB = new nedb({ filename: currentDir + "/userProfile.db", autoload: true });


// user data db stores questionaire answers
// user access tokens
// and other variables
const userDataDB = new nedb({ filename: currentDir + "/userData.db", autoload: true });
// userDataDB {{username: null, accessTokens: []}, }
// accessTokens [{accessToken: null, expireDate: Date, deviceId: null},]


router.post('/login', function (req, res) {
    var username = req.body.username.trim();
    var password = req.body.password;
    if (!validateUsername(username)) res.end(JSON.stringify(basicPacket(false, 2, "Invalid username")));
    if (!validatePassword(password)) res.end(JSON.stringify(basicPacket(false, 3, "Invalid password")));
    var hashedPassword = hashPassword(username, password);
    delete password;
    console.log(username, hashedPassword);
    userProfileDB.findOne({username: username}, function (error, userProfile) {
        if (error) return sendInternalServerErrorPacket(res);
        // if username not found
        if (userProfile == null) return res.end(JSON.stringify(basicPacket(false, 1, "Incorrect username or password")));
        // if password not correct or the attribute not undefined
        if (!userProfile.hashedPassword && user.hashedPassword != hashedPassword) return res.end(JSON.stringify(basicPacket(false, 1, "Incorrect username or password")));
        // if everything works
        // search user data db for access tokens
        userDataDB.findOne({username: userProfile.username}, function (error, userData) {
            if (error) return sendInternalServerErrorPacket(res);
            // create an access token for the user, uuidv1 is time based
            // expireDate by default is 30 days, the date will be refreshed every time it's accessed
            // I will leave deviceId empty for a while as we dont need it right away 
            var token = {accessToken: uuidv1(), expireDate: new Date(date.getDate() + 30), deviceId: null}
            userData.accessTokens.push(token);
            userDataDB.update({ username: userData.username }, userData, {}, function (error, numReplaced) {
                if (error)  return sendInternalServerErrorPacket(res);
                var successPacket = basicPacket(true, null, "Login success");
                successPacket.accessToken = token.accessToken;
                res.end(successPacket);
            });
        });
    });
})
router.post('/register', function (req, res) {
    var username = req.body.username.trim();
    var password = req.body.password;
    var email = req.body.email; // TODO email validation
    var name = req.body.name;   // TODO name validation
    if (!validateUsername(username)) res.end(JSON.stringify(basicPacket(false, 2, "Invalid username")));
    if (!validatePassword(password)) res.end(JSON.stringify(basicPacket(false, 3, "Invalid password")));
    var hashedPassword = hashPassword(username, password);
    delete password;
    console.log(username, hashedPassword);
    userProfileDB.findOne({username: username}, function (error, userProfile) {
        if (error) return sendInternalServerErrorPacket(res);
        // if username found
        if (userProfile == null) return res.end(JSON.stringify(basicPacket(false, 4, "Username already exists")));
        // if everything works
        // add the new user to database
        var newUserProfile = {username: username, hashedPassword: hashedPassword, email: email, name: name};
        userProfileDB.insert(newUserProfile, function (error, userProfile) {
            if (error)  return sendInternalServerErrorPacket(res);
            var newUserData = {username: userProfile.username, accessTokens: []};
            var token = {accessToken: uuidv1(), expireDate: new Date(date.getDate() + 30), deviceId: null}
            newUserData.accessTokens.push(token);
            // TODO check before insert
            userDataDB.insert(newUserData, function (error) {
                if (error)  return sendInternalServerErrorPacket(res);
                var successPacket = basicPacket(true, null, "Register success");
                successPacket.accessToken = token.accessToken;
                res.end(successPacket);
            })
        })
    });
})
// username should between 5 to 32 characters long
// username may only contain alphanumeric characters
// username must start with a letter? May or may not emmm
function validateUsername(username) {
    if (username.length < 5 || username.length > 32) return false;
    if (!username.match(/^[a-zA-Z0-9]+$/)) return false;
    return true;
}
// password should between 6 to 32 characters long
// password range is from 32 to 126
function validatePassword(password) {
    if (password.length < 6 || password.length > 32) return false;
    if (!password.match(/^[\x20-\x7E]+$/)) return false;
    return true;
}
function getUsernameByAccessToken(accessToken, callback) {
    userDataDB.findOne({"accessTokens.accessToken": accessToken} ,function (error, user) {
        if (error) return callback(error, null);
        var token = user.accessTokens.find(function (element) {
            element.accessToken == accessToken;
        });
        // Remove outdated access token
        // or refresh the expireDate
        var today = new Date(date.getDate());
        if (today.getTime() >= token.expireDate.getTime()){
            user.accessTokens.splice(user.accessTokens.indexOf(token), 1);
            userDataDB.update({username: user.username}, {$set: {accessTokens: user.accessTokens}}, {}, function (error) {
                if (error) return callback(error, null);
                return callback("expiredToken", null);
            });
        }
        else{
            token.expireDate = new Date(date.getDate() + 30);
            userDataDB.update({username: user.username}, {$set: {accessTokens: user.accessTokens}}, {}, function (error) {
                if (error) return callback(error, null);
                return callback(null, user.username);
            });
        }
    });
}
function hashPassword(username, password) {
    // the reason I add username fator is to reduce md5 dict attack
    // the symbol + is to avoid duplication, as we don't allow + in username
    // although sha1 maybe better but md5 is faster and safe enough
    var combo = md5(username + "+" + password);
    return combo;
}
function basicPacket(success = null, errorCode = null, message = null) {
    return { 
        success: success,
        errorCode: errorCode,
        message: message,
    };
}
function sendInternalServerErrorPacket(res) {
    console.log(error);
    return res.end(JSON.stringify(basicPacket(false, 500, "Internal Server Error")));
}
module.exports = router;