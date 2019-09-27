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
    Header,
} from 'react-native';

import styles from './index.style'

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.bottomContainer}>    
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.button]}
                    onPress={() => this.props.navigation.navigate('Journal')}>
                    <Text style={styles.buttonText}>Journal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.button]}
                    onPress={() => this.props.navigation.navigate('TrendChart')}>
                    <Text style={styles.buttonText}>Trend Chart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.button]}
                    onPress={() => this.props.navigation.navigate('Badges')}>
                    <Text style={styles.buttonText}>Badges</Text>
                </TouchableOpacity>    
            </View>
        );
    }
    
};
export default ProfileScreen;