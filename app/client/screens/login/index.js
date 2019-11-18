/**
 * Login Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import styles from './index.style'
import UserAPI from '../../api/user.api'
import QualtricsAPI from '../../api/qualtrics.api'
import ALogo from './logo'

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.ready = false;
        
    }
    componentDidMount() {
        //this.setState({ ready: true });
        
        this.setState({ username: 'hfang' });
        this.setState({ password: '123456' });
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
                console.log(global.AppAccessToken);
                // QualtricsAPI.getQuestionsFromBlockAsync("acad")
                // .then((result) => QualtricsAPI.createResponseAsync({"QID192": 4, "QID204": 3}))
                // .then((result) => console.log(result))
                // .catch((error) => console.log(error));
                if (result.success) this.props.onLoginPress();
                else Alert.alert('Faild To Login', result.message);
            })
            .catch((error) => Alert.alert('Faild To Login', error.message));
    }
    registerAsync() {
        UserAPI.registerAsync(this.state.username, this.state.password, this.state.name, this.state.email)
            .then((result) => {
                if (result.success) this.props.onLoginPress();
                else Alert.alert('Faild to register', result.message);
            })
            .catch((error) => Alert.alert('Faild to register', error.message));
    }

    render() {
        //if (!this.state.ready) return null;
        return (
                <View style={styles.mainContainer}>
                    <View style={{ width: '35%', height: '35%', alignContent: 'center', flexDirection: 'column', alignSelf: 'center' }}>
                        <ALogo />
                    </View>
                    <TextInput style={styles.textBox}
                        placeholder="User Name"
                        onChangeText={(text) => this.setState({ username: text })}
                        onSubmitEditing={() => { this.passwordTextInput.focus(); }} 
                        ref={(input) => { this.usernameTextInput = input; }}>{this.state.username}</TextInput>
                    <TextInput style={styles.textBox}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                        ref={(input) => { this.passwordTextInput = input; }} >{this.state.password}</TextInput>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.loginAsync()}>
                        <Text style={styles.loginButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.demoButton]}
                        onPress={() => this.props.onLoginPress()}>
                        <Text style={styles.loginButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkText}>New to SHWB? Register here</Text>
                </View>
        );
    }

};
export default LoginScreen;