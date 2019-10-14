const express  = require('express');
const router = express.Router();
const userRouter = require("./user-route");
const fetch = require("node-fetch");

const HTTPProtocol = 'https';
const ServerHostName = 'universityofalabama.az1.qualtrics.com';
const ServerPortNumber = null;
const DefaultPostRequestTimeout = 5000;
const APIToken = "fcH9LuoEtElwIpFhB4nZFwHtnc5thWkjqhfCXYzP";
const SurveyId = "SV_4G7Q5ay8Oh9RpWt";

var currentDir = __dirname;



router.get('/api/getAllQuestions', function (req, res) {
    var accessToken = req.headers["x-access-token"];
    userRouter.getUsernameByAccessToken(accessToken, function (errorPacket, username) {
        if (errorPacket) return res.end(JSON.stringify(errorPacket));
        global.qualtricsDB.find({}, function (error, questions) {
            if (error) return res.end(JSON.stringify(basicPacket(false, 16, "failed to read database")));
            var successPacket = basicPacket(true, null, "Succefully get all questions");
            successPacket.questions = questions;
            res.end(JSON.stringify(successPacket));
        });
    })
    
});
getAllQuestions()
        .then((responseJson) => processAllQuestions(responseJson));
function processAllQuestions(response) {
    global.qualtricsDB.remove({}, { multi: true }, function (error) {
        if (error) return console.log(error);
        response.result.elements.forEach(question => {
            var item = {questionId: question.QuestionID, questionText: question.QuestionDescription, questionTag: question.DataExportTag, choices: question.Choices};
            global.qualtricsDB.insert(item);
        });
    });
}
function getAllQuestions() {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += "/API/v3/survey-definitions/"+SurveyId+"/questions";
    return new Promise (function (resolve, reject) {
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), DefaultPostRequestTimeout);
        var headers = {
            'X-API-TOKEN': APIToken,
        };
        fetch(fullUrl, {method: 'GET', headers: headers})
            .then((response) => {
                if (response.status != 200) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                response.json()
                .then((responseJson) => resolve(responseJson))
            })
            .catch((error) => {
                console.log(error);
                reject(basicPacket(false, 2, 'Network request failed'))
            });
    });
}
function basicPacket(success = null, errorCode = null, message = null) {
    return { 
        success: success,
        errorCode: errorCode,
        message: message,
    };
}

module.exports = router;

function sendInternalServerErrorPacket(res, error) {
    console.log(error);
    return res.end(JSON.stringify(basicPacket(false, 500, "Internal Server Error")));
}