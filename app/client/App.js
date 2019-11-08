import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';



import {
    createSwitchNavigator,
    createAppContainer,
    DrawerItems, 
    SafeAreaView,
} from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, Drawer } from 'react-navigation-drawer';
import UserAPI from './api/user.api'
import { AppRegistry, Dimensions } from 'react-native';
import SideMenu from './screens/side/sideMenu'

import TopBar from './screens/header/topBar'

import LoginScreen from './screens/login/index'
import SampleScreen from './screens/sample/index'
import HomeScreen from './screens/home/index'
import ProfileScreen from './screens/profile/index'
import JournalScreen from './screens/journal/index'
import AcademicScreen from './screens/academic/index'
import SideDrawer from './screens/sideDrawer/index'
import SurveyScreen from './screens/survey/index'
import Menu from './screens/modals/hamburgerMenu'

import AppNavigator from './mainComponents/TabNavigator'
import MainNavigator from './mainComponents/DrawerNavigator'

global.AppAccessToken = null;

const InitialNavigator = createSwitchNavigator({
    Login: LoginScreen,
    App: MainNavigator,
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
export default App;





