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
    StyleSheet,
} from 'react-native';

let about = "The Alabama Model of Student Health and Wellbeing provides an understanding of student wellness that contributes to students’ academic and personal success as well as ways to support it. Through this model of wellness, it is our hope students will have a better holistic understanding of health and wellbeing and how it relates to their college experience.";
let vision = "The University of Alabama will be the national leader in collegiate health and wellbeing that fosters resilience and empowers students for healthy living."
let mission = "To promote a multifaceted, developmental, and holistic approach to wellbeing that maximizes each student’s learning experience through pioneering programs and services that support, engage, and educate students to establish and maintain a lifelong approach to wellness."

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.headerText}> About</Text>
                    <Text style={styles.entryText}>{about}</Text>
                    <Text style={styles.headerText}> Vision</Text>
                    <Text style={styles.entryText}>{vision}</Text>
                    <Text style={styles.headerText}> Mission</Text>
                    <Text style={styles.entryText}>{mission}</Text>
                </View>
            </View>
        );
    }

};
export default SampleScreen;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '4%',
    },
    rowEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1.4,
        borderBottomColor: 'crimson',
    },
    headerText: {
        fontSize: 23,
        color: 'black',
        fontWeight: "400",
        marginBottom: "4%",
        borderBottomColor: 'crimson',
        borderBottomWidth: 1.5,
        width: "95%",
        alignSelf: 'center',
    },
    entryText: {
        width: "93%",
        fontSize: 15,
        color: 'black',
        alignSelf: "center",
        marginBottom: "3%",
    }
});