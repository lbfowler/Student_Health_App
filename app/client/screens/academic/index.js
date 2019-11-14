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
    Alert,
} from 'react-native';
import styles from './index.style'
import QualtricsAPI from '../../api/qualtrics.api';

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        this.state = {
            category: navigation.getParam('category',''),
            questions: [],
            loading: true,
        };
    }
    componentDidMount(){
        try{
            QualtricsAPI.getQuestionsFromBlockAsync(this.state.category)
                .then((quest) => {this.setState({questions: quest.questions,loading: false})});            
        }catch(error){
            Alert.alert("Error loading questions");
        }

    }
    render() {
        console.log("Academic rendered")
        // console.log(this)
        // console.log(this.props.navigation.dangerouslyGetParent())
        if(this.state.loading){
            return(
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        return (
            <View style={styles.mainContainer}>
                <Text>Size: {this.state.questions.length}</Text>
                <Text style={styles.loginButtonText}>Question: {this.state.questions[0].questionText}</Text>
            </View>
        );
    }
};
export default SampleScreen;