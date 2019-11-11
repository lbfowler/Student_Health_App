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

// createSession()
//     .then((responseJson) => {
//             console.log(responseJson)
//             autoAnswerQuestions(responseJson);
//     })
//     .catch((error) => console.log(error));
getAllQuestions()
    .then((responseJson) => processAllQuestions(responseJson))
    .catch((error) => console.log(error));

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
router.get('/api/getQuestionsFromBlock', function (req, res) {
    var accessToken = req.headers["x-access-token"];
    userRouter.getUsernameByAccessToken(accessToken, function (errorPacket, username) {
        if (errorPacket) return res.end(JSON.stringify(errorPacket));
        var blockName = req.body.blockName.trim();
        var matchBlock = new RegExp("^" + blockName, "i");
        global.qualtricsDB.find({questionTag: {$regex: matchBlock}}, function (error, questions) {
            if (error) return res.end(JSON.stringify(basicPacket(false, 16, "failed to read database")));
            var successPacket = basicPacket(true, null, "Succefully get all questions");
            successPacket.questions = questions;
            res.end(JSON.stringify(successPacket));
        });
    })
});
router.post('/api/createSession', function (req, res) {
    var accessToken = req.headers["x-access-token"];
    userRouter.getUsernameByAccessToken(accessToken, function (errorPacket, username) {
        if (errorPacket) return res.end(JSON.stringify(errorPacket));
        global.qualtricsDB.find({}, function (error, questions) {
            if (error) return res.end(JSON.stringify(basicPacket(false, 16, "failed to read database")));
            var successPacket =  (true, null, "Succefully get all questions");
            successPacket.questions = questions;
            res.end(JSON.stringify(successPacket));
        });
    })
    
});

router.post('/api/createResponse', function (req, res) {
    var accessToken = req.headers["x-access-token"];
    userRouter.getUsernameByAccessToken(accessToken, function (errorPacket, username) {
        if (errorPacket) return res.end(JSON.stringify(errorPacket));
        if (!req.body.qid || !req.body.choiceId) return res.end(JSON.stringify(basicPacket(false, 15, "QID or choiceId cannot be empty")));
        var qid = req.body.qid.trim();
        var choiceId = req.body.choiceId.trim();
        global.userDataDB.find({username: username}, function (error, userData) {
            if (error) return res.end(JSON.stringify(basicPacket(false, 16, "failed to read database")));
            if (userData.answers == undefined) userData.answers = [];
            userData.answers.push({qid: qid, choiceId: choiceId, time: Date.now()});
            global.userDataDB.update({ username: username }, userData, {}, function (error, numReplaced) {
                if (error)  return sendInternalServerErrorPacket(res, error);
                var successPacket =  (true, null, "Succefully create response");
                res.end(JSON.stringify(successPacket));
            });
        });
    })
    
});

function createResponseFromQuestion(question, choiceId) {
    var resp = {[question.questionId] : {
        [choiceId]: {
            "selected": true
        }
    }};
    return resp;    
}

function autoAnswerQuestions(responseJson) {
    updateSession(responseJson, createResponseFromQuestion(responseJson.result.questions[0], "1"))
    .then((responseJson) => {
        var isDone = responseJson.result.done;
        if (isDone != false) closeSession(responseJson);
        else autoAnswerQuestions(responseJson)
    })
    .catch((error) => console.log(error));
}

function processAllQuestions(response) {
    global.qualtricsDB.remove({}, { multi: true }, function (error) {
        if (error) return console.log(error);
        response.result.elements.forEach(question => {
            var item = {questionId: question.QuestionID, questionText: question.QuestionDescription, questionTag: question.DataExportTag, choices: question.Choices};
            global.qualtricsDB.insert(item);
        });
        console.log(response.result);
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
function createSession() {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += "/API/v3/surveys/"+SurveyId+"/sessions";
    return new Promise (function (resolve, reject) {
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), DefaultPostRequestTimeout);
        var headers = {
            'X-API-TOKEN': APIToken,
            'Content-Type': 'application/json',
        };
        var body = {
            "language": "EN",
            "embeddedData": {
                   "username": "hfang"
            } 
        };
        fetch(fullUrl, {method: 'POST', headers: headers, body: JSON.stringify(body)})
            .then((response) => {
                if (response.status != 200 && response.status != 201) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                response.json()
                .then((responseJson) => resolve(responseJson))
            })
            .catch((error) => {
                console.log(error);
                reject(basicPacket(false, 2, 'Network request failed'))
            });
    });
}
function updateSession(session, responses) {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += "/API/v3/surveys/"+SurveyId+"/sessions/" + session.result.sessionId + "/#";
    return new Promise (function (resolve, reject) {
        
        var headers = {
            'X-API-TOKEN': APIToken,
            'Content-Type': 'application/json',
        };
        var firstQuesiton = session.result.questions[0];
        var body = {
                        "advance": true,
                        "embeddedData": {
                            "username": "hfang"
                        },
                        "responses": responses
                    };
        //console.log(body);
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), DefaultPostRequestTimeout);
        fetch(fullUrl, {method: 'POST', headers: headers, body: JSON.stringify(body)})
            .then((response) => {
                if (response.status != 200 && response.status != 201) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                response.json()
                .then((responseJson) => {
                    console.log(responseJson)
                    resolve(responseJson);
                })
            })
            .catch((error) => {
                console.log(error);
                reject(basicPacket(false, 2, 'Network request failed'))
            });
    });
}
function closeSession(session) {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += "/API/v3/surveys/"+SurveyId+"/sessions/" + session.result.sessionId;
    return new Promise (function (resolve, reject) {
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), DefaultPostRequestTimeout);
        var headers = {
            'X-API-TOKEN': APIToken,
            'Content-Type': 'application/json',
        };
        var body = {"close": true};
        fetch(fullUrl, {method: 'POST', headers: headers, body: JSON.stringify(body)})
            .then((response) => {
                if (response.status != 200 && response.status != 201) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                response.json()
                .then((responseJson) => resolve(responseJson))
            })
            .catch((error) => {
                console.log(error);
                reject(basicPacket(false, 2, 'Network request failed'))
            });
    });
}
function createResponse() {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += "/API/v3/surveys/"+SurveyId+"/sessions/responses";
    return new Promise (function (resolve, reject) {
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), DefaultPostRequestTimeout);
        var headers = {
            'X-API-TOKEN': APIToken,
            'Content-Type': 'application/json',
        };
        var body = {"close": true};
        fetch(fullUrl, {method: 'POST', headers: headers, body: JSON.stringify(body)})
            .then((response) => {
                if (response.status != 200 && response.status != 201) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
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