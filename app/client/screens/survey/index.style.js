import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
        padding: 20,
    },
      container: {
        paddingTop: 30,
        alignItems: 'center'
      },
      question: {
      marginBottom: 45

      },
      qWrap: {
        paddingTop: 25
      },
      button: {
        marginBottom: 15,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#9E1B32'
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      },
      header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: 25
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
       }
  });
  