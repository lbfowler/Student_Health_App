/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    FlatList,
    ScrollView,
    View,
    Text,
    Alert,
} from 'react-native';
import styles from './index.style'
import JournalEntry from '../modals/journal';
import AsyncStorage from '@react-native-community/async-storage';

export class JournalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Journal: null,
        };
    }

    componentDidMount(){
        this.getJournal();
    }

    getJournal(){
        try{
            AsyncStorage.getItem('Journal')
                .then((journal) => {
                    this.setState({Journal: journal});
                });
        }catch(error){
            Alert.alert(error);
        }
    }
    
    render() {
        {this.getJournal()}
        if(this.state.Journal === null){
            return (
                <View style={styles.mainContainer}>
                    <JournalEntry/>  
                </View>
            )
        }else{
            return (
                <View style={styles.mainContainer}>
                    <JournalEntry/>
                    <ScrollView>
                        {
                            JSON.parse(this.state.Journal).map((item,index) => (
                                <View key={index} style={styles.eachJournal}>
                                    <Text style={styles.dateText}>{item.date}</Text>
                                    <Text style={styles.textText}>{item.text}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>  
                </View>
            )
        }
    }    
};
export default JournalScreen;