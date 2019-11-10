//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component, useContext } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation-drawer';
import UserAvatar from 'react-native-user-avatar'
import AsyncStorage from '@react-native-community/async-storage';
import { UserConsumer } from '../ContextComponent';
import { UserContext }  from '../ContextComponent';

export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        getPic = async () => {
            try {
                const value = await AsyncStorage.getItem('@ProfilePicture');
                if (value !== null) {
                    this.setState({ photo: value })
                }
            } catch (error) {
                console.log(error);
            }
        }
        getPic();
        this.state = { photo: null }
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
                key: 1
            },
            {
                navOptionThumb: 'pencil',
                navOptionName: 'Journal',
                screenToNavigate: 'Journal',
                key: 2
            },
            {
                navOptionThumb: 'user',
                navOptionName: 'Profile',
                screenToNavigate: 'Profile',
                key: 3
            },
            {
                navOptionThumb: 'gears',
                navOptionName: 'Settings',
                screenToNavigate: 'Settings',
                key: 4
            },
            {
                navOptionThumb: 'quote-right',
                navOptionName: 'About',
                screenToNavigate: 'About',
                key: 5
            },
        ];
    }
    render() {

        return (
            <UserConsumer>
                {({ profUri, updateProfUri }) =>
                    <View style={styles.sideMenuContainer}>
                        <UserAvatar name="Ben Gerszewski" size={100} color="#a00003" radius={.33}
                            src={profUri && profUri != 1 ? profUri : (this.state.photo && profUri != 1 ? this.state.photo : 0)}
                        />
                        <Text style={{ fontSize: 20 }}>Ben Gerszewski</Text>
                        {/* <Icon name="user" size={100} color="#808080" /> */}
                        {/*Divider between Top Image and Sidebar Option*/}
                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#808080',
                                marginTop: 15,
                            }}
                        />
                        {/*Setting up Navigation Options from option array using loop*/}
                        <View style={{ width: '100%' }}>
                            {this.items.map((item, key) => (
                                <TouchableHighlight
                                    onPress={() => {
                                        global.currentScreenIndex = key;
                                        if (item.navOptionName == "Home") {
                                            this.props.navigation.navigate("Main");
                                            this.props.navigation.navigate("Home");
                                        }
                                        else {
                                            this.props.navigation.navigate(item.screenToNavigate);
                                        }
                                        this.props.navigation.dispatch(DrawerActions.closeDrawer());
                                    }}
                                    key={item.key}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            backgroundColor: global.currentScreenIndex === key ? '#ffffff' : '#ffffff',
                                        }
                                        }
                                        key={item.key}>
                                        <View style={{ marginRight: "5%", marginLeft: 10, width: "15%",  }}>
                                            <Icon name={item.navOptionThumb} size={25} color="#808080" style={{textAlign: 'center'}}/>
                                        </View>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: global.currentScreenIndex === key ? 'black' : 'black',
                                            }}
                                        >
                                            {item.navOptionName}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </View>
                    </View>
                }
            </UserConsumer>
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