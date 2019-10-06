/**
 * Login Page
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
} from 'react-native';

import styles from './index.style'
import UserAPI from '../../api/user.api'

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async login(){
        const result = await UserAPI.loginAsync(this.state.username, this.state.password);
        console.log(result);
        if (result.success) {
            Alert.alert(
                'Server Response',
                result.message,
                [{text: 'OK', onPress: () => console.log('OK Pressed')},],
                {cancelable: false},
            );
            this.props.navigation.navigate('Sample');
        }
        else {
            Alert.alert(
                'Faild To Login',
                result.message,
                [{text: 'OK', onPress: () => console.log('OK Pressed')},],
                {cancelable: false},
            );
        }
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.logo} source={require('./ua-square-logo-100x100.png')} />
                <TextInput style={styles.textBox} placeholder="User Name" onChangeText={(text) => this.setState({ username: text })} />
                <TextInput style={styles.textBox} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.login()}>
                    <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.loginButtonText}>Profile Page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.loginButtonText}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
};
export default LoginScreen;