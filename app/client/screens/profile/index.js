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
    Header,
    Picker,
} from 'react-native';

import styles from './index.style'

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            academic: '3.4 Academic',
            career: '3.0 Career',
            financial: '3.7 Financial',
            psychological: '2.9 Psychological',
            physical: '3.1 Physical',
            social: '3.8 Social',
            spiritual: '1.9 Spiritual',
            menu: '',
        };
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.portrait}>
                        Photo
                    </Text>
                    <Image 
                        style={styles.logo}
                        source={require('./UA-StackedNameplate_PMS201.png')}
                    />
                    <Picker    
                        style={styles.picker}
                        selectedValue={this.state.menu}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({menu: itemValue})
                    }>
                        <Picker.Item label="Home" value="home"/>
                        <Picker.Item label="Profile" value="profile"/>
                        <Picker.Item label="Resources" value="resource"/>
                        <Picker.Item label="Survey" value="survey"/>
                        <Picker.Item label="Campus Map" value="map"/>
                    </Picker>    
                </View>
                <Text style={styles.name}>User Name Here</Text>
                <View style={styles.lineStyle} />
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.academic}</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.career}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.financial}</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.psychological}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.physical}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.greenButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.social}</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,styles.blueButton]}
                    onPress={() => this.props.navigation.navigate('Academic')}>
                    <Text style={styles.buttonText}>{this.state.spiritual}</Text>    
                </TouchableOpacity>              
                <TouchableOpacity
                    style={[styles.buttonContainer,styles.button]}
                    onPress={() => this.props.navigation.navigate('Journal')}>
                    <Text style={styles.buttonText}>Journal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer,styles.button]}
                    onPress={() => this.props.navigation.navigate('TrendChart')}>
                    <Text style={styles.buttonText}>Trend Chart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonContainer,styles.button]}
                    onPress={() => this.props.navigation.navigate('Badges')}>
                    <Text style={styles.buttonText}>Badges</Text>
                </TouchableOpacity>    
            </View>
        );
    }
    
};
export default ProfileScreen;