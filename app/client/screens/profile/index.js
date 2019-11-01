/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Alert,
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Picker,
} from 'react-native';

import UserAPI from '../../api/user.api'
import styles from './index.style'
import Header from '../header/topBar'
import Footer from '../header/bottomBar'

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            academic: '3.4 Academic',
            career: '3.0 Career',
            financial: '3.7 Financial',
            psychological: '2.9 Psychological',
            physical: '3.1 Physical',
            social: '3.8 Social',
            spiritual: '1.9 Spiritual',
            username: 'User Name Here',            
        };
    }

    componentDidMount(){
        try{
            UserAPI.getUserInfoAsync()
                .then((user) => this.setState({username: JSON.stringify(user.name)}));        
        }catch(error){
            this.setState({username: 'Error loading user name'})
        }

    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation}/>
                <Text style={styles.name}>{this.state.username}</Text>
                <View style={styles.lineStyle} />
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.buttonText}>{this.state.academic}</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.career}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.financial}</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.psychological}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.physical}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.social}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.spiritual}</Text>    
                </TouchableOpacity>
                <Footer navigation={this.props.navigation}/>     
            </View>
        );
    }
};
export default ProfileScreen;