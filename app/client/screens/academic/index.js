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

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.loginButton]}
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.loginButtonText}>Back</Text>
                    </TouchableOpacity>
                <Text style={styles.loginButtonText}>This is a sample page</Text>
                </View>
            </View>
        );
    }
    
};
export default SampleScreen;