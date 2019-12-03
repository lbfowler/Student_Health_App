const expect = require('chai').expect;
const request = require('request');


it('Login Test', function (done) {
    request('http://localhost:8888/login', {method: 'POST'}, function (error, response, body) {
        expect(body).to.not.equal(undefined);
        var jsonObj = JSON.parse(body);
        expect(jsonObj.success).to.not.equal(undefined);
        expect(jsonObj.success).to.equal(false);
        done();
    })
})

it('Register Test', function (done) {
    request('http://localhost:8888/register', {method: 'POST'}, function (error, response, body) {
        expect(body).to.not.equal(undefined);
        var jsonObj = JSON.parse(body);
        expect(jsonObj.success).to.not.equal(undefined);
        expect(jsonObj.success).to.equal(false);
        done();
    })
})

it('Unauthorized Test', function (done) {
    request('http://localhost:8888/api/getAllQuestions', {method: 'GET'}, 
        function (error, response, body) {
            expect(body).to.not.equal(undefined);
            var jsonObj = JSON.parse(body);
            expect(jsonObj.success).to.not.equal(undefined);
            expect(jsonObj.success).to.equal(false);
            done();
        }
    )
})