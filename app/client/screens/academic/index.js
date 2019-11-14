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
        const {navigation} = this.props;
        this.state = {
            category: navigation.getParam('category',''),
            questions: [],
            loading: true,
            current: 0,
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
    getQuestions = () => (
        <ScrollView>
          {
            this.state.questions.map(question => (
                <View style={styles.questions} key={question.questionText}>
                    <Text style={styles.question}>{question.questionText}</Text>
                    {
                      Object.keys(question.choices).map(i => (                          
                        <View style={styles.choices} key={i}> 
                            <TouchableOpacity>
                                <Text>{question.choices[i].Display}</Text>
                            </TouchableOpacity>
                        </View>    
                      ))
                    }
                </View>    
            ))
          }  
        </ScrollView>
    );

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
                    {this.getQuestions()}
                </View>
            );
        }
    }
};
export default SampleScreen;