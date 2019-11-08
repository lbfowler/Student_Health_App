// https://reactnavigation.org/docs/en/getting-started.html#installation
// React Native 0.60 and higher

// On newer versions of React Native, linking is automatic.

// To complete the linking on iOS, make sure you have Cocoapods installed. Then run:

// cd ios
// pod install
// cd ..
// To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:

// implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
// implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems, DrawerNavigatorItems, DrawerActions } from 'react-navigation-drawer'
import { NavigationActions } from 'react-navigation';


import Icon from 'react-native-vector-icons/FontAwesome';
import About from '../screens/survey/index'
import Home, { HomeScreen } from '../screens/home/index'
import Settings from '../screens/profile/index'
import LoginScreen from '../screens/login/index'
import SampleScreen from '../screens/sample/index'

import { View, ScrollView, Text } from "react-native";

import styles from "./styles";

import AppNavigator from './TabNavigator'

import { StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

import DrawerNavigatorComponent from './DrawerNavigatorComponent'

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem: {
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#d6d7da'
    }
});
class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (
            <View>
                {/* <ScrollView> */}
                    <View>
                        <View style={styles2.menuItem}>
                            <Text onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                            <Icon name="user" size= {20} color='black' />
                        </View>

                        <View style={styles2.menuItem}>
                            <Text onPress={this.navigateToScreen('Journal')}>
                                Journal
                            </Text>
                        </View>

                        <View style={styles2.menuItem}>
                            <Text onPress={this.navigateToScreen('Profile')}>
                                Profile
                            </Text>
                        </View>

                        <View style={styles2.menuItem}>
                            <Text onPress={this.navigateToScreen('Login')}>
                                Login
                            </Text>
                        </View>
                        
                        <View style={styles2.menuItem}>
                            <Text onPress={this.navigateToScreen('Sample')}>
                                Sample
                            </Text>
                        </View>

                    </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

const MainNavigator = createDrawerNavigator(
    {
        AppNavigator: {
            screen: AppNavigator
        },
        Login: {screen: LoginScreen},
        Sample: {screen: SampleScreen},
        Home: {screen: HomeScreen},
    },
    {
        initialRouteName: 'AppNavigator',
        // contentComponent: DrawerScreen,
        contentComponent: DrawerNavigatorComponent,
        drawerPosition: "right",

    }
);

export default MainNavigator