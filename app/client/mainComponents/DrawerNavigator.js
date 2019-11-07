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

import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems, DrawerNavigatorItems } from 'react-navigation-drawer'


import About from '../screens/survey/index'
import Home from '../screens/home/index'
import Settings from '../screens/profile/index'

import { View } from "react-native";

import styles from "./styles";

import AppNavigator from './TabNavigator'

const CustomDrawerNavigator = ({props}) => (
//   <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"black"}
      activeTintColor={"white"}
      iconContainerStyle={styles.icons}
      {...props}
    />
  //</View>
);


const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="md-home" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Home"
      },
      screen: Home
    },

    Settings: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="md-settings" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Settings"
      },
      screen: Settings
    },

    AppNavigator: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="md-settings" style={{ color: tintColor }} />
        // ),
        drawerLabel: "Else"
      },
      screen: AppNavigator
    },

    About: {
      navigationOptions: {
        // drawerIcon: ({ tintColor }) => (
        //   <Ionicons name="ios-person" style={{ color: tintColor }} />
        // ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
      initialRouteName: 'AppNavigator',
    contentComponent: props => (<DrawerNavigatorItems {...props} />)
  }
);

export default MainNavigator