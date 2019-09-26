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
} from 'react-native';

import styles from './index.style'

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.loginButtonText}>{this.state.date}</Text>
            <TouchableOpacity
                style={[styles.buttonContainer, styles.bottomButton]}
                onPress={() => this.props.navigation.navigate('Journal')}>
                <Text style={styles.loginButtonText}>Profile Page</Text>
            </TouchableOpacity>
            </View>
        );
    }
    
};
export default ProfileScreen;