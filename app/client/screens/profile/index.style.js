import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(256,256,256)',
        position: 'absolute',
        flexDirection: 'column',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    logo: {
        alignSelf: 'center',
        height: 50,
        width: '50%',
    },
    picker: {
        alignSelf: 'flex-end',
        width: '25%',
        left: 10,
    },
    portrait:{
        alignSelf: 'flex-start',
        width: '25%',
    },
    name: {
        color: 'black',
        alignSelf: 'center',
        height: 30,
        fontSize: 18,
        fontWeight: 'bold',
        top:10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor:'black',
        margin: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonCont: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
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
  