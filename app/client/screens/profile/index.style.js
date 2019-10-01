import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(110,110,110)',
        position: 'absolute',
        flexDirection: 'column',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
    },
    name: {
        alignSelf: 'center',
        height: 30,
        fontSize: 18,
        fontWeight: 'bold',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor:'white',
        margin: 10,
    },
    bottomContainer: {
        flex: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '75%',
        height: 40,
        borderRadius: 3,
        marginTop: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: 30,
        borderRadius: 2,
        marginTop: 5,
    },
    buttonCont: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: 40,
        borderRadius: 2,
        marginTop: 5,
    },
    button: {
        backgroundColor: 'rgb(166,166,166)',
    },
    blueButton: {
        backgroundColor: 'rgb(137,207,240)',
    },
    greenButton: {
        backgroundColor: 'rgb(176,191,26)',
    },
    buttonText: {
        color: 'white',
        alignContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },    
  });
  