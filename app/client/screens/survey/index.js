/**
 * Sample Page
 *
 * @format
 * @flow
 */





import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Picker} from 'react-native';
import styles from './index.style'

import Header from '../header/topBar'

export class SurveyScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  _onPressButton1() {
    alert('You\'re feeling very good!')
  }

  _onPressButton2() {
    alert('You\'re feeling good!')
  }
  _onPressButton3() {
    alert('You\'re feeling fair!')
  }
  _onPressButton4() {
    alert('You\'re feeling not good!')
  }
  _onPressButton5() {
    alert('No problem!')
  }


  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}>
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
        </View> */}
      <Header navigation={this.props.navigation}/>
      <View style={styles.qWrap}>
      <Text style={styles.question}>How does your physical health feel today?</Text>
      </View>

        <TouchableHighlight onPress={this._onPressButton1} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Very Good</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton2} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Good</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton3} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Fair</Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton4} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Not Very Good</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton5} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Answer Later</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};
export default SurveyScreen;








//import React, { Component } from 'react';
//import {
//    SafeAreaView,
//    StyleSheet,
//    ScrollView,
//    Alert,
//    View,
//    Image,
//    Text,
//    Button,
//    TouchableOpacity,
//    TextInput,
//    StatusBar,
//} from 'react-native';
//
//
//
//export class SurveyScreen extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {};
//    }
//
//
//    render() {
//        return (

//            <View style={styles.mainContainer}>
//                <Text style={styles.loginButtonText}>This is a survey question</Text>
//            </View>
//            <View style={style.container}>

//            </View>
//            </View>
//
//        );
//    }
//
//};
//export default SurveyScreen;