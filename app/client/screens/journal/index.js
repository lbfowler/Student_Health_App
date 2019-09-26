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

export class JournalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var day = new Date().getDay();
        switch(month){
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
                break;
            case 8:
                month = "August";
                break;
            case 9:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;                                            
        }
        this.setState({
            date: month + ',' + day + ',' + year
        });
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.loginButtonText}>{this.state.date}</Text>
            </View>
        );
    }
    
};
export default JournalScreen;