/**
 * Settings Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { UserConsumer } from '../../ContextComponent';
export class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { photo: null, };
        console.log("Something");
    }
    handleChoosePhoto = (func) => {
        const options = { noData: true, };
        console.log("Trying...");
        ImagePicker.launchImageLibrary(options, response => {
            console.log("Before response");
            console.log(response);
            console.log("After response");
            if (response.uri) {
                console.log("Updated state");
                this.setState({ photo: response.uri })
                func(response.uri);
            }
            const setData = async () => {
                try {
                    await AsyncStorage.setItem('@ProfilePicture', response.uri);
                    console.log("Stored image persistently as @ProfilePicture")
                } catch (error) {
                    console.log(error);
                }
            }
            setData();
        })
    }
    render() {
        const { photo } = this.state;
        return (
            <UserConsumer>
                {({ updateProfUri }) =>
                    <View style={styles.mainContainer}>
                        <TouchableHighlight onPress={() => {
                            console.log("Pressed top button, should call handler");
                            this.handleChoosePhoto(updateProfUri);
                        }
                        } style={styles.button}>
                            <Text style={styles.loginButtonText}>This is a sample page</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={
                            async () => {
                                try {
                                    const value = await AsyncStorage.getItem('@ProfilePicture');
                                    if (value !== null) {
                                        console.log(value);
                                        this.setState({ photo: value });
                                        console.log("updateProfUri should be called...");
                                        updateProfUri(value);
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                        } style={styles.button}>
                            <Text style={styles.loginButtonText}>Check for photo</Text>
                        </TouchableHighlight>
                        {photo &&
                            <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />
                        }
                        <TouchableHighlight onPress={
                            async () => {
                                try {
                                    await AsyncStorage.removeItem('@ProfilePicture')
                                } catch (e) {
                                    console.log(e);
                                }
                                updateProfUri(null);
                                this.setState({photo: null});
                                console.log('Done. (Removed Picture)')
                            }
                        }
                        style={styles.button}>
                            <Text style={styles.loginButtonText}>Remove Pic</Text>
                        </TouchableHighlight>
                    </View>
                }
            </UserConsumer>
        );
    }

};
export default SettingsScreen;


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        height: '100%',
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'crimson',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 40,
        borderRadius: 3,
        marginTop: 30,
    },
});
