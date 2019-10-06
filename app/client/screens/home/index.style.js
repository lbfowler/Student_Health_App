import { StyleSheet } from 'react-native';
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
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 40,
        borderRadius: 20,
        marginTop: 13,
      },
    loginButton: {
        backgroundColor: 'rgb(163, 0, 0)',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    topBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "94%",
        marginTop: "1%",
        marginBottom: "3%",
        flex: 3/20,
    },
    pbContainer: {
        alignItems: 'flex-start',
        flex: 1.5/8,
        width: undefined,
        height: "55%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: "3%",
    },
    profBtn: {
        justifyContent: 'center',
        width: .8*60,
        height: .8*60,
    },
    ddContainer: {
        alignItems: 'flex-end',
        flex: 1.5/8,
    },
    hamburger: {
        alignItems: 'flex-end',
        flex: 1.5/8,
        width: undefined,
        height: "50%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginLeft: "3%",
    },
    uaContainer: {
        alignItems: 'center',
        flex: 5/8,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: "1%",
    },
    ualogo: {
        width: undefined,
        height: "80%",
        flex: 5/8,
        resizeMode: 'contain',
    },
    svgWrapper: {
        width: "95%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 12.5/20,
    },
    bottomButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 400,
        marginBottom: "2%",
        marginTop: "5%",
        flex: 5.5/20,
    }
  });
  