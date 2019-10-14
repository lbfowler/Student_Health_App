import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserAPI from './api/user.api'

import LoginScreen from './screens/login/index'
import SampleScreen from './screens/sample/index'
import ProfileScreen from './screens/profile/index'
import JournalScreen from './screens/journal/index'
import AcademicScreen from './screens/academic/index'

global.AppAccessToken = null;

const AppNavigator = createStackNavigator ({
    Login: {screen: LoginScreen},
    Sample: {screen: SampleScreen},
    Profile: {screen: ProfileScreen},
    Journal: {screen: JournalScreen},
    Academic: {screen: AcademicScreen},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});


 
export default createAppContainer(AppNavigator);




