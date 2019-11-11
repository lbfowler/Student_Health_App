/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './index.style'

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log("Academic rendered")
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.loginButtonText}>This is a sample page</Text>
            </View>
        );
    }
};
export default SampleScreen;