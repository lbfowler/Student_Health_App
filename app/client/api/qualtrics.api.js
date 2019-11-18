import AsyncStorage from '@react-native-community/async-storage';
import Request from './request';

const QualtricsAPI = {
    getAllQuestionsAsync(){
        return new Promise (function (resolve, reject) {
            Request.createGetRequest('/api/getAllQuestions')
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    },
    // blackName mapping table (Case insensitive)
    // Social "Soc"
    // Physical "Phys"
    // Career "Car"
    // Financial "Fin"
    // Academic "Acad"
    // Spiritual "Spir"
    // Psychological "Psyc"
    getQuestionsFromBlockAsync(blockName){
        return new Promise (function (resolve, reject) {
            Request.createGetRequest('/api/getQuestionsFromBlock/' + blockName)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    },
    // example idChoicePairs: {"QID192": 4, "QID204": 3}
    // QualtricsAPI.createResponseAsync({"QID192": 4, "QID204": 3})
    //             .then((result) => console.log(result))
    //             .catch((error) => console.log(error));
    createResponseAsync(idChoicePairs){
        return new Promise (function (resolve, reject) {
            Request.createPostRequest('/api/createResponse', JSON.stringify({
                idChoicePairs: idChoicePairs,
            }))
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
    }
}
export default QualtricsAPI;





