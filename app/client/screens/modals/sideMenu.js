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

class SideMenu extends Component{
    state ={
        modalVisible: true,
    };
    setVisibility(curState){
        this.setState({modalVisible: curState});
    }
    menuChoice(choice){
        this.setVisibility(!this.state.modalVisible);
        menuOpts = ['Home','Profile','Survey','Options'];
        this.props.navigation.navigate(menuOpts[choice]);
    }
    
    render(){
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
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(0);}}>
                            <Text style={{fontSize: 16}}>Close Modal</Text>
                        </TouchableOpacity>
                    </View>    
                </Modal>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    textContainer:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'grey',
        width: '50%',
        height: '100%',
    },
    showMod:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor:'white',
    },
});
export default SideMenu;