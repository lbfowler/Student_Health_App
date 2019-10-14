const HTTPProtocol = 'http';
const ServerHostName = 'sandcatgo.com';
const ServerPortNumber = 8888;
const DefaultPostRequestTimeout = 5000;
const DefaultGetRequestTimeout = 5000;

const Request = {
    basicPacket(success, errorCode, message) {
        return { 
            success: success,
            errorCode: errorCode,
            message: message,
        };
    },
    createPostRequest(url, body, timeout = DefaultPostRequestTimeout) {
        var fullUrl = HTTPProtocol + '://' + ServerHostName
        if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
        fullUrl += url;
        return new Promise (function (resolve, reject) {
            setTimeout(()=> reject(Request.basicPacket(false, 1, 'Network request timeout')), timeout);
            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-ACCESS-TOKEN': global.AppAccessToken,
            };
            fetch(fullUrl, {method: 'POST', headers: headers, body: body})
                .then((response) => {
                    if (response.status != 200) return reject(Request.basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                    response.json()
                    .then((responseJson) => validateServerPacket(responseJson, resolve, reject))
                    .catch(Request.basicPacket(false, 3, 'Failed to parse server packet'));
                })
                .catch((error) => {
                    console.log(error);
                    reject(Request.basicPacket(false, 2, 'Network request failed'))
                });
        });
    },
    createGetRequest(url, timeout = DefaultGetRequestTimeout) {
        var fullUrl = HTTPProtocol + '://' + ServerHostName
        if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
        fullUrl += url;
        return new Promise (function (resolve, reject) {
            setTimeout(()=> reject(Request.basicPacket(false, 1, 'Network request timeout')), timeout);
            var headers = {
                Accept: 'application/json',
                'X-ACCESS-TOKEN': global.AppAccessToken,
            };
            fetch(fullUrl, {method: 'GET', headers: headers})
                .then((response) => {
                    if (response.status != 200) return reject(Request.basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                    response.json()
                    .then((responseJson) => validateServerPacket(responseJson, resolve, reject))
                    .catch(Request.basicPacket(false, 3, 'Failed to parse server packet'));
                })
                .catch((error) => {
                    console.log(error);
                    reject(Request.basicPacket(false, 2, 'Network request failed'))
                });
        });
    },
}
export default Request;

function validateServerPacket(response, resolve, reject) {
    if (response == undefined || response.success == undefined)
        reject(Request.basicPacket(false, 4, 'Invalid server packet'));
    else resolve(response);
}