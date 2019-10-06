import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(233,233,233)',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        marginTop: 0,
    },
    model: {
        width: null,
        resizeMode: 'contain',
        height: '75%',
        marginVertical: '12.5%',
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 40,
        borderRadius: 3,
        marginTop: 10,
      },
    loginButton: {
        backgroundColor: 'rgb(163, 0, 0)',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonContainerTop: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 40,
        borderRadius: 3,
        marginTop: 20,
    },
    topBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: "95%",
        marginTop: 10,
        marginBottom: 10,
    },
    pbContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    profBtn: {
        width: .9*60,
        height: .9*60,
    },
    ddContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    hamburger: {
        right: '0%',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: .9*50,
        height: .9*50,
    },
    ualogo: {
        justifyContent: 'center',
        height: 50,
        width: 188.46,
        marginBottom: 5,
    },
    svgWrapper: {
        marginTop: 10,
        marginBottom: 0,
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bottomButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: "100%",
        marginBottom: 30,
    }
  });
  