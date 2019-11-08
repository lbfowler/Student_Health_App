//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
            },
            {
                navOptionThumb: 'pencil',
                navOptionName: 'Journal',
                screenToNavigate: 'Journal',
            },
            {
                navOptionThumb: 'user',
                navOptionName: 'Profile',
                screenToNavigate: 'Profile',
            },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                {/* <Image
          source={{ uri: this.proileImage }}
          style={styles.sideMenuProfileIcon}
        /> */}
                <Icon name="user" size={100} color="#808080" />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <TouchableHighlight onPress={() => {
                            global.currentScreenIndex = key;
                            this.props.navigation.navigate(item.screenToNavigate);
                          }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                            }
                        }
                        key={key}>
                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} size={25} color="#808080" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: global.currentScreenIndex === key ? 'red' : 'black',
                                }}
                                >
                                {item.navOptionName}
                            </Text>
                        </View>
                                </TouchableHighlight>
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});