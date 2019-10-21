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
    FlatList,
} from 'react-native';

import Header from '../header/topBar'
import styles from './index.style'

export class JournalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    getDate(){
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var day = new Date().getDate();
        var months = ["January","February","March","April","May","June","July","August","Septmeber","October","November","December"];
        return months[month] + ', ' + day + ', ' + year;
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation}/>
                <TouchableOpacity style={styles.journalBtn} onPress={()=> Alert.alert("I am a journal button")}>
                    <Text style={styles.journalText}>Add Journal Entry</Text>
                </TouchableOpacity>    
                <ScrollView>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>
                    <Text style={styles.loginButtonText}>{this.getDate()}</Text>                    
                </ScrollView>
            </View>
        );
    }    
};
export default JournalScreen;