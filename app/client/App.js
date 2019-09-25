import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/login/index'
import SampleScreen from './screens/sample/index'
import ProfileScreen from './screens/profile/index'
const AppNavigator = createStackNavigator ({
  Login: {screen: LoginScreen},
  Sample: {screen: SampleScreen},
  Profile: {screen: ProfileScreen}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(AppNavigator);




