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
}
export default QualtricsAPI;





