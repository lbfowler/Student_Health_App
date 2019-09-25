/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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

import styles from './App.style'
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
 
    }
    login(username, password, callback) {
        if (username == null || password == null) return;
        console.log(username);
        console.log(password);
        fetch('http://sandcatgo.com:8888/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                username: username,
                password: password,
            }),
        })
        .then((res) => res.json()) 
        .then((data) => {
            callback(data);
        });
    }
    showReuslt(data)
    {
        Alert.alert(
            'Server Response',
            JSON.stringify(data),
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.logo} source={require('./ua-square-logo-100x100.png')} />
                <TextInput style={styles.textBox} placeholder="User Name" onChangeText={(text) => this.setState({ username: text })} />
                <TextInput style={styles.textBox} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.login(this.state.username, this.state.password, this.showReuslt)}>
                    <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
};



