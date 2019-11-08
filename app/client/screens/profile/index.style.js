import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: "100%",
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
    blueButton: {
        backgroundColor: 'rgb(137,207,240)',
    },
    greenButton: {
        backgroundColor: 'rgb(176,191,26)',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
