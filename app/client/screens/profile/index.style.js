import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: "100%",
    },
    scores:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',        
    },
    scoreCont:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: '2%',
        borderRadius: 10,
        width:'40%',
        padding: '1%',
    },
    name: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lineStyle: {
        borderWidth: 0.5,
        alignSelf: 'center',
        borderColor: 'black',
        width: '75%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: '75%',
        width: '22.5%',
    },
    buttonCont: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        height: '7.5%',
        width: '75%',
        margin: '2%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
