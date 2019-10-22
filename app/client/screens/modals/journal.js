import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
    TouchableOpacity,
    View,
    Text,
    Alert,
    Dimensions,
    TextInput,
} from 'react-native';

class JournalEntry extends Component{
    state ={
        modalVisible: false,
        journalText: '',
    };
    setVisibility(curState){
        this.setState({modalVisible: curState});
    }
    sendJournal(){
        this.setVisibility(!this.state.modalVisible);
        Alert.alert(this.state.journalText);
    }
    
    render(){
        var {height,width} = Dimensions.get("screen");
        return(
            <View>
            <Modal
                animationType = "fade"
                transparent = {true}
                visible = {this.state.modalVisible}
                onRequestClose={() => {
                    this.setVisibility(!this.state.modalVisible);    
                }}>        
                <View style={styles.textContainer}>
                    <TextInput
                        maxLength = {160}
                        multiline
                        style={styles.textBox}
                        numberOfLines={5} 
                        onChangeText={(text)=> this.setState({journalText: text})}>                    
                    </TextInput>
                    <TouchableOpacity style={styles.showMod} onPress={()=> {this.sendJournal();}}>
                        <Text style={{fontSize: 16}}>Enter Journal</Text>
                    </TouchableOpacity>
                </View>    
            </Modal>
            <TouchableOpacity style={styles.showMod} onPress={()=> {this.setVisibility(true)}}>
                <Text style={{fontSize: 16}}>New Journal Entry</Text>
            </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textBox:{
        width: '85%',
        borderWidth: 1,
        borderColor: 'black'
    },
    textContainer:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '40%',
        width: '75%',
    },
    showMod:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor:'grey',
    },
    modalView: {   
    },       
});
export default JournalEntry;