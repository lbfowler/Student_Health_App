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
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import styles from './index.style'
import QualtricsAPI from '../../api/qualtrics.api';

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.getQuestions = this.getQuestions.bind(this);
        this.sendResponse = this.sendResponse.bind(this);
        const {navigation} = this.props;
        this.state = {
            category: navigation.getParam('category',''),
            questions: [],
            loading: true,
            current: 0,
            colorDiagonal: "#8fd2c7",
            colorVertical: "#b5d334",  
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

    sendResponse(value,questionId){
        
    }

    getQuestions(question){ 
        return(
                <View style={styles.questions} key={question.questionText}>
                    <Text style={[styles.question,{backgroundColor: this.state.colorDiagonal}]}>{question.questionText}</Text>
                    {
                      Object.keys(question.choices).map(i => (                          
                        <View key={i}> 
                            <TouchableOpacity 
                                style={[styles.choices,{backgroundColor: this.state.colorVertical}]}
                                onPress={() => this.sendResponse(i,question.questionId)}>
                                <Text style={[{fontSize: 16},{fontWeight: 'normal'}]}>{question.choices[i].Display}</Text>
                            </TouchableOpacity>
                        </View>    
                      ))
                    }
                </View>
        );
    }

    render() {
        console.log("Academic rendered")
        if(this.state.loading){
            return(
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }else{
            return (
                <View style={styles.mainContainer}>
                    {
                        this.state.questions.map(question => {
                            return this.getQuestions(question);
                        })
                    }
                    <ScrollView>
                        <Text>Resources go here!</Text>
                    </ScrollView>
                </View>
            );
        }
    }
};
export default SampleScreen;