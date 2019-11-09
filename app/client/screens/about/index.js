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
    SafeAreaView,
    FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const data = [
    {
        title: 'About',
        text: "The Alabama Model of Student Health and Wellbeing provides an understanding of student wellness that contributes to students’ academic and personal success as well as ways to support it. Through this model of wellness, it is our hope students will have a better holistic understanding of health and wellbeing and how it relates to their college experience.",
    },
    {
        title: 'Vision',
        text: "The University of Alabama will be the national leader in collegiate health and wellbeing that fosters resilience and empowers students for healthy living.",
    },
    {
        title: 'Mission',
        text: "To promote a multifaceted, developmental, and holistic approach to wellbeing that maximizes each student’s learning experience through pioneering programs and services that support, engage, and educate students to establish and maintain a lifelong approach to wellness.",
    },
    {
        title: 'Foundation',
        text: "The wellbeing of students is the University’s highest priority. The University promotes a holistic view of student wellness that encompasses a range of dimensions, including academic, emotional, and physical wellbeing and that considers the whole student and the entirety of the student experience.\n\nThe Alabama Model of Student Health and Wellbeing is grounded in the fundamental understanding of student development and cultural competence. Understanding student development provides the knowledge that student growth and maturity is vital in establishing and maintaining a healthy lifestyle as well as ways to provide appropriate prevention and intervention.",
    }
];
const dimensions = [
    {
        name: 'Academic',
        description: 'Developing and enhancing successful skills and intellectual abilities that lead to overall academic success.',
    },
    {
        name: 'Career',
        description: 'Gaining awareness of individual interests, abilities, and experiences that lead to congruence with one’s chosen career path.',
    },
    {
        name: 'Financial',
        description: 'Establishing and maintaining knowledge and skills to develop and maintain financial security.',
    },
    {
        name: 'Psychological',
        description: 'Developing and maintaining personal awareness, resilience, and understanding of one’s self and others that leads to personal satisfaction and rewarding relationships.',
    },
    {
        name: 'Physical',
        description: 'Establishing, enacting, and maintaining individual awareness and knowledge of the importance of physical activity and healthy lifestyle practices.',
    },
    {
        name: 'Social',
        description: 'Developing and maintaining healthy and appropriate relationships with others that lead to a feeling of belonging and social connection.',
    },
    {
        name: 'Spiritual',
        description: 'Developing a process of existential understanding and growth that can help to inform and guide one’s meaning and experience of the world.',
    },
];

export class SampleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }, styles.mainContainer}>
                    {data.map((item) => (
                        <View key={item.title} style={styles.rowEntry}>
                            <Text style={styles.headerText}>{item.title}</Text>
                            <Text style={styles.entryText}>{item.text}</Text>
                        </View>
                    ))}
                    <Text style={styles.headerText}>Dimensions of the Alabama Model</Text>
                    <View style={styles.modelContainer}>
                        {dimensions.map((item) => (
                            <View key={item.name} style={styles.rowEntry}>
                                <Text style={styles.modelTitle}>{item.name}</Text>
                                <Text style={styles.modelEntry}>{item.description}</Text>
                            </View>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }

};
export default SampleScreen;

const styles = StyleSheet.create({
    modelContainer: {
        marginLeft: "10%",
        marginRight: "25%",
        width: '70%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: "flex-start",
        alignContent: "center",
        marginBottom: '4%',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
    },
    modelTitle: {
        fontSize: 19,
        color: 'black',
        fontWeight: "400",
        marginBottom: "1%",
        borderBottomColor: 'crimson',
        borderBottomWidth: 1.5,
        width: "90%",
        alignSelf: 'flex-start',
        textAlign: "left",
    },
    modelEntry: {
        width: "93%",
        fontSize: 15,
        color: 'black',
        alignSelf: "center",
        marginBottom: "3%",
        marginRight: "10%",
        marginLeft: "6%",
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: "flex-start",
        alignContent: "center",
        marginTop: '4%',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
    },
    rowEntry: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
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