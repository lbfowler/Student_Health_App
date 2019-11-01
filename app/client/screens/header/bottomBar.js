import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={[styles.button,styles.buttonContainer]}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                        <Icon name="user" size={25} color="grey"/>
                        <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,styles.buttonContainer]}
                    onPress={() => this.props.navigation.navigate('Survey')}>
                        <Icon name="file-text" size={25} color="grey"/>
                        <Text style={styles.buttonText}>Survey</Text>
                </TouchableOpacity>  
                <TouchableOpacity
                    style={[styles.button,styles.buttonContainer]}
                    onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="home" size={25} color="grey"/>
                        <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,styles.buttonContainer]}
                    onPress={() => this.props.navigation.navigate('Resources')}>
                        <Icon name="gears" size={25} color="grey"/>
                        <Text style={styles.buttonText}>Resoures</Text>
                </TouchableOpacity>     
                <TouchableOpacity
                    style={[styles.button,styles.buttonContainer]}
                    onPress={() => this.props.navigation.navigate('Journal')}>
                        <Icon name="pencil" size={25} color="grey"/>
                        <Text style={styles.buttonText}>Journal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'grey',
    },
});
export default Footer;