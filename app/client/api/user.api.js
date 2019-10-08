const HTTPProtocol = 'http';
const ServerHostName = 'sandcatgo.com';
const ServerPortNumber = 8888;
const DefaultPostRequestTimeout = 5000;
function basicPacket(success, errorCode, message) {
    return { 
        success: success,
        errorCode: errorCode,
        message: message,
    };
}
function validateServerPacket(response, resolve, reject) {
        console.log(response);
        if (response == undefined || response.success == undefined || response.message == undefined)
            reject(basicPacket(false, 4, 'Invalid server packet'));
        else resolve(response);
}
function createPostRequest(url, body, timeout = DefaultPostRequestTimeout) {
    var fullUrl = HTTPProtocol + '://' + ServerHostName
    if (ServerPortNumber != null) fullUrl += (':' + ServerPortNumber);
    fullUrl += url;
    return new Promise (function (resolve, reject) {
        setTimeout(()=> reject(basicPacket(false, 1, 'Network request timeout')), timeout);
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(fullUrl, {method: 'POST', headers: headers, body: body})
            .then((response) => {
                if (response.status != 200) return reject(basicPacket(false, 5, 'Network request failed, code: ' + response.status));
                response.json()
                .then((responseJson) => validateServerPacket(responseJson, resolve, reject))
                .catch(basicPacket(false, 3, 'Failed to parse server packet'));
            })
            .catch((error) => {
                console.log(error);
                reject(basicPacket(false, 2, 'Network request failed'))
            });
    });
}
const UserAPI = {
    loginAsync(username, password){
        return new Promise (function (resolve, reject) {
            if (!username || !password) {
                reject(basicPacket(false, 6, 'Username and password cannot be empty'));
            }
            createPostRequest('/login', JSON.stringify({
                username: username,
                password: password,
            }))
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    },
    registerAsync(username, password, name, email){
        return new Promise (function (resolve, reject) {
            if (!username || !password) {
                reject(basicPacket(false, 6, 'Username and password cannot be empty'));
            }
            if (!name) name = "";
            if (!email) email = "";
            createPostRequest('/register', JSON.stringify({
                username: username,
                password: password,
                name: name,
                email: email,
            }))
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    }
}
export default UserAPI;