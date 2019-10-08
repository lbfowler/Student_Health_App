const express = require('express')
const nedb = require("nedb");
const http = require("http");
const fs = require("fs");
const path = require("path");

var currentDir = __dirname;

const qualtricDB = new nedb({ filename: currentDir + "/qualtric.db", autoload: true });

// Start the web server
// Add HTTPS support later, ask for domain as well
const port = 8888;
var app = express();
app.listen(port, () => console.log(`Server listening on port ${port}!`));

// Assign addresses to routers
// Each router is a module
// load one time only and keeps it's context within it's own scope
// Databases are initialized within routers
// There should be a better way to do this
app.use(express.json());
const userRouter = require("./user-route");
app.post('/login', userRouter);
app.post('/register', userRouter);

