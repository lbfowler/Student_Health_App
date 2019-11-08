/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

import styles from './index.style'
import JournalEntry from '../modals/journal';

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
                <JournalEntry/>   
                <ScrollView>
                </ScrollView>
            </View>
        );
    }    
};
export default JournalScreen;