import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
    },
    loginButtonText: {
        fontSize: 24,
    },
    journalBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        height: '5%',
        width: '50%',
        margin: '2%',
        backgroundColor: 'grey',
    },
    topBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '17.5%',
        width: "94%",
        marginTop: "1%",
        marginBottom: "1%",
    },
    pbContainer: {
        alignItems: 'flex-start',
        flex: 1/8,
        width: undefined,
        height: "48%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: "3%",
    },
    hamburger: {
        alignItems: 'flex-end',
        flex: 1/8,
        width: undefined,
        height: "42%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginLeft: "3%",
    },
    ualogo: {
        width: undefined,
        height: "75%",
        flex: 5/8,
        resizeMode: 'contain',
    },
    
  });
  