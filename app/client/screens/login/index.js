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
import QualtricsAPI from '../../api/qualtrics.api'

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.ready = false;

    }
    componentDidMount(){
        this.setState({ ready: true });
        // UserAPI.getAccessToken()
        //     .then((accessToken) => {
        //         // QualtricsAPI.getAllQuestionsAsync()
        //         // .then((questions) => console.log(questions));
        //         // if (accessToken) {
        //         //     UserAPI.setAccessToken("");
        //         //     this.props.navigation.navigate('Sample');
        //         // }
        //         // else {
        //         //     this.setState({ ready: true });
        //         // }
                
        //     })
        //     .catch((error) => console.log(error));
    }
    loginAsync() {
        UserAPI.loginAsync(this.state.username, this.state.password)
            .then((result) => {
                if (result.success) this.props.navigation.navigate('Sample');
                else Alert.alert('Faild To Login', result.message);
            })
            .catch((error) => Alert.alert('Faild To Login', error.message));
    }
    registerAsync() {
        UserAPI.registerAsync(this.state.username, this.state.password, this.state.name, this.state.email)
            .then((result) => {
                if (result.success) this.props.navigation.navigate('Sample');
                else Alert.alert('Faild to register', result.message);
            })
            .catch((error) => Alert.alert('Faild to register', error.message));
    }

    render() {
        if (!this.state.ready) return null;
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.logo} source={require('./ua-square-logo-100x100.png')} />
                <TextInput style={styles.textBox} placeholder="User Name" onChangeText={(text) => this.setState({ username: text })} />
                <TextInput style={styles.textBox} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.loginAsync()}>
                    <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.registerAsync()}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.loginButtonText}>Profile Page</Text>
                </TouchableOpacity>
            </View>
        );
    }

};
export default LoginScreen;