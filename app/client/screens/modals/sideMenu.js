import React, {Component} from 'react';
import Svg, {Path,Rect, Polygon, Circle} from 'react-native-svg'; 
import {
    StyleSheet,
    Modal,
    TouchableOpacity,
    View,
    Text,
    Alert,
    Dimensions,
    TextInput,
    PanResponder,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state ={
            modalVisible: false,
            colorFill: 'white',
            colorBtn: "#989898",
            showDraggable: true,
            start: null,
            end: null,
        };  
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if(this.state.start < evt.nativeEvent.pageY){
                    this.setVisibility(false);
                }  
            },
            onPanResponderGrant: (evt,gestureState) => {
                this.setState({start: evt.nativeEvent.pageY});
            }
        });
    }
    setVisibility(curState){
        this.setState({modalVisible: curState});
    }
    menuChoice(choice){
        this.setVisibility(!this.state.modalVisible);
        menuOpts = ['Home','Profile','Messages','Resources','Survey','Map','Calendar','Settings','Terms','About Us','Feedback','Badges'];
        this.props.navigation.navigate(menuOpts[choice]);
    }
    
    render(){
        return(
            <View>      
                <Modal
                    visible = {this.state.modalVisible}
                    animationType = "slide"
                    transparent = {true}
                    visible = {this.state.modalVisible}
                    onRequestClose={() => {
                        this.setVisibility(!this.state.modalVisible);    
                    }}
                >        
                    <Animated.View {...this.PanResponder.panHandlers} style={styles.textContainer}>                    
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(0);}}>
                            <Icon name="home" size={25} color="grey"/>
                            <Text>Home</Text>               
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(1);}}>
                            <Icon name="user" size={25} color="grey"/>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(2);}}>
                            <Icon name="envelope" size={25} color="grey"/>    
                            <Text>Messages</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(3);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(4);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>Survey</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(5);}}>
                            <Icon name="map-marker" size={25} color="grey"/>
                            <Text>Map</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(6);}}>
                            <Icon name="calendar-o" size={25} color="grey"/>
                            <Text>Calendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(7);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(8);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>Terms</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(9);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>About Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(10);}}>
                            <Icon name="commenting" size={25} color="grey"/>
                            <Text>Feedback</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.showMod} onPress={()=> {this.menuChoice(11);}}>
                            <Icon name="gears" size={25} color="grey"/>
                            <Text>Badges</Text>
                        </TouchableOpacity>
                    </Animated.View>    
                </Modal>
                <TouchableOpacity hitSlop={{top: 10,bottom: 10,left: 10,right: 10}} style={styles.hamburger} onPress={() => this.setVisibility(true)}>
                    <Svg width='250%' height= '250%' viewBox="0 0 92.83 89.33"> 
                        <Path d="M89.83,0H3A3,3,0,0,0,0,3V16.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V3A3,3,0,0,0,89.83,0Z" 
                            fill={this.state.colorBtn}/>
                        <Path d="M89.83,35H3a3,3,0,0,0-3,3V51.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V38A3,3,0,0,0,89.83,35Z" 
                            fill={this.state.colorBtn}/>
                        <Path d="M89.83,70H3a3,3,0,0,0-3,3V86.33a3,3,0,0,0,3,3H89.83a3,3,0,0,0,3-3V73A3,3,0,0,0,89.83,70Z" 
                            fill={this.state.colorBtn}/>
                    </Svg>
                </TouchableOpacity>
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
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
    },
    showMod:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1/5,
        height: '50%',
        width: '50%',
    },
    hamburger: {
        alignItems: 'center',
        flex: 1/8,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: "7.5%",
    },
});
export default SideMenu;