const express = require('express')
const nedb = require("nedb");
const http = require("http");
const fs = require("fs");
const path = require("path");

var currentDir = __dirname;
const userProfileDB = new nedb({ filename: currentDir + "/userProfile.db", autoload: true });
const userDataDB = new nedb({ filename: currentDir + "/userData.db", autoload: true });
const qualtricDB = new nedb({ filename: currentDir + "/qualtric.db", autoload: true });

var app = express();
const port = 8888;

app.use(express.json());
app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    res.end(JSON.stringify({
        success: true,
        errorCode: null,
        message: 'Login Success',
    }));
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))