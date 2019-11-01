import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet,Alert} from 'react-native';
import styles from './index.style'
import QualtricsAPI from '../../api/qualtrics.api';

export default class SideDrawer extends Component{
    constructor(props){
        super(props);
        this.sate = {
            questions: 'empty',
        };
    }
    componentDidMount(){
        try{
            QualtricsAPI.getAllQuestionsAsync()
                .then((quest) => {Alert.alert(JSON.stringify(quest))});        
        }catch(error){
            Alert.alert("Error loading questions");
        }

    }
    render(){
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
}