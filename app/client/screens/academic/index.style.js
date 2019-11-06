import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
        padding: 20,
    },
    bottomButtonContainer: {
        alignSelf: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        aspectRatio: 19/4,
        height: '25%',
        borderRadius: 4,
        marginBottom: 13,
        flex: 3.5/60,
        resizeMode: 'contain',
    },
    loginButton: {
        backgroundColor: '#9E1B32',
    },
    loginButtonText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    
  });
  