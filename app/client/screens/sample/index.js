/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
} from 'react-native';

import styles from './index.style'
import UserAPI from '../../api/user.api'
export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        UserAPI.getUserInfoAsync()
            .then((user) => Alert.alert('User Info', JSON.stringify(user)));
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.loginButtonText}>This is a sample page</Text>
            </View>
        );
    }
    
};
export default SampleScreen;