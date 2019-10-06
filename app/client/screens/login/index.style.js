import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
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
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
        padding: 20,
    },
    logo: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        marginTop: '45%',
        marginBottom: '10%',
    },  
    textBox:{
        height: 40,
        width: '50%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  