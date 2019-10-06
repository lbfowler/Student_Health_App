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
        marginBottom: "1%",
        flex: 3/20,
    },
    pbContainer: {
        alignItems: 'flex-start',
        flex: 1.5/8,
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
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: .8*50,
        height: .8*50,
    },
    uaContainer: {
        alignItems: 'center',
        flex: 5/8,
        justifyContent: 'center',
        transform: [
            {scale: .75}
        ],
        marginTop: "1%",
    },
    ualogo: {
        justifyContent: 'center',
        width: 300,
        height: 80,
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
  