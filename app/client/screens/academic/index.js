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
    TouchableHighlight,
} from 'react-native';
import styles from './index.style'
import QualtricsAPI from '../../api/qualtrics.api';

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            category: navigation.getParam('category', ''),
            questions: null,
            loading: true,
        };
    }
    componentDidMount() {
        try {
            QualtricsAPI.getQuestionsFromBlockAsync(this.state.category)
                .then((quest) => {
                    this.setState({ questions: quest.questions, loading: false })
                });
        } catch (error) {
            Alert.alert("Error loading questions");
        }

    }
    render() {
        console.log("Academic rendered")
        if (this.state.loading) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            let choices = [];
            for (let [key, value] of Object.entries(this.state.questions[0].choices)){
                choices.push(value['Display'])
            }
            const len = choices.length;
            const h = (70/len).toString() + '%';
            console.log(h)
            console.log(len)
            return (
                <View style={styles.mainContainer}>
                    <Text>Size: {this.state.questions.length}</Text>
                    <Text style={styles.loginButtonText}>Question: {this.state.questions[0].questionText}</Text>
                    <View style={{flex: 1, justifyContent: "flex-start"}}>
                        {choices.map((choice, index) => (
                            <TouchableHighlight style={{height: '8.75%', margin: 10}} key={index} onPress={() => alert(choice)} underlayColor="white">
                                <View style={[styles.button, {height: '100%', justifyContent: "center"}]}>
                                    <Text style={styles.buttonText}>{choice}</Text>
                                </View>
                            </TouchableHighlight>
                        ))}
                    </View>
                </View>
            );
        }
    }
};
export default SampleScreen;