/**
 * Settings Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImagePicker from 'react-native-image-picker';

let f1 = function (transThis) {
    transThis.updateParentState('temp message');
}
let f2 = function (func) {
    const options = { noData: true, };
    ImagePicker.launchImageLibrary({ options }, response => {
        if (response.path) {
            func.updateParentState("file://" + response.path);
            const setData = async () => {
                try {
                    await AsyncStorage.setItem('@ProfilePicture', "file://" + response.path);

                } catch (error) {
                    console.log(error);
                }
            }
            setData();
        }
    })
}
let f3 = function (func) {
    func.updateParentState(0);
    let rem = async () => {
        try {
            await AsyncStorage.removeItem('@ProfilePicture')
        } catch (e) {
            console.log(e);
        }
    }
    rem()
}

export class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.DATA = [
            {
                id: '1',
                title: 'Change Profile Picture',
                icon: 'photo',
                onpress: f2,
            },
            {
                id: '2',
                title: 'Delete Picture',
                icon: 'trash-o',
                onpress: f3,
            },
            {
                id: '3',
                title: 'Third Item',
                icon: 'close',
                onpress: f1,
            },
        ];
    }
    updateParentState(data) {
        this.props.screenProps.postMessage(data);
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ width: '100%' }}>
                    {this.DATA.map((item) => (
                        <TouchableHighlight
                            onPress={() => { item.onpress(this) }}
                            style={styles.item}
                            underlayColor="rgba(160,160,160,20)"
                            key={item.title}
                        >
                            <View style={styles.item}>
                                <View style={{ marginRight: "1%", marginLeft: 3, width: "9%", }}>
                                    <Icon name={item.icon} size={25} color="#808080" style={{ textAlign: 'center' }} />
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>

            </View>
        );
    }
};
export default SettingsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(244,244,244)',
        marginTop: 3,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: "baseline",
    },
    item: {
        backgroundColor: 'rgba(230,230,230,20)',
        padding: 0,
        marginVertical: 2,
        width: '100%',
        height: 45,
        flexDirection: "row",
        alignItems: 'center',

    },
    title: {
        fontSize: 16,
        textAlignVertical: "center",
        alignSelf: 'center',
    },
});
