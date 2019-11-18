import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
        padding: 20,
    },
    loginButtonText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    questions: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        borderWidth: 0.5,
        borderBottomColor: 'black',
        alignSelf: 'center',
    },
    choices: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'auto',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.5,
    },    
  });
  