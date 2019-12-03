import AsyncStorage from '@react-native-community/async-storage';
import Request from './request';

const UserAPI = {
    loginAsync(username, password){
        return new Promise (function (resolve, reject) {
            if (!username || !password) {
                return reject(Request.basicPacket(false, 6, 'Username and password cannot be empty'));
            }
            Request.createPostRequest('/login', JSON.stringify({
                username: username,
                password: password,
            }))
            .then((response) => {
                if (response.accessToken == undefined) return resolve(response);
                UserAPI.setAccessToken(response.accessToken)
                .then(() => resolve(response))
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
            })
            .catch((error) => reject(error));
        });
    },
    registerAsync(username, password, name, email){
        return new Promise (function (resolve, reject) {
            if (!username || !password) {
                return reject(Request.basicPacket(false, 6, 'Username and password cannot be empty'));
            }
            if (!name) name = "";
            if (!email) email = "";
            Request.createPostRequest('/register', JSON.stringify({
                username: username,
                password: password,
                name: name,
                email: email,
            }))
            .then((response) => {
                if (response.accessToken == undefined) return resolve(response);
                UserAPI.setAccessToken(response.accessToken)
                .then(() => resolve(response))
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
            })
            .catch((error) => reject(error));
        });
    },
    getUserInfoAsync(){
        return new Promise (function (resolve, reject) {
            Request.createGetRequest('/api/getUserInfo')
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    },
    resetUserScoresAsync(){
        return new Promise (function (resolve, reject) {
            Request.createPostRequest('/api/resetUserScores')
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    },
    getAccessToken() {
        return new Promise(function (resolve, reject) {
            AsyncStorage.getItem('AppAccessToken')
                .then((token) =>{
                    global.AppAccessToken = token;
                    resolve(token);
                })
                .catch((error)  => {
                    console.log(error);
                    reject(Request.basicPacket(false, 8, 'Failed to get access token'));
                });
        });
        
    }
    ,  setAccessToken(accessToken) {
        return new Promise(function (resolve, reject) {
            if (!accessToken) return reject(Request.basicPacket(false, 9, 'Token is undefined'));
            AsyncStorage.setItem('AppAccessToken', accessToken)
                .then(() =>{
                    global.AppAccessToken = accessToken;
                    resolve();
                })
                .catch((error)  => {
                    console.log(error);
                    reject(Request.basicPacket(false, 7, 'Failed to save access token'));
                });
        });
    }
}
export default UserAPI;





