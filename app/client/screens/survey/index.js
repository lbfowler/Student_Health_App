/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './index.style'

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