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

import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../screens/home/index'
import LoginScreen from '../screens/login/index'
import SampleScreen from '../screens/sample/index'
import SettingsScreen from '../screens/settings/index'
import AboutScreen from '../screens/about/index'
import { Dimensions } from "react-native";
import AppNavigator from './TabNavigator'
import DrawerNavigatorComponent from './DrawerNavigatorComponent'
import {
    createAppContainer,
} from 'react-navigation';

const MainNavigator = createDrawerNavigator(
    {
        Main: {
            screen: AppNavigator
        },
        Login: {screen: LoginScreen},
        Sample: {screen: SampleScreen},
        Home: {screen: HomeScreen},
        Settings: {screen: SettingsScreen},
        About: {screen: AboutScreen},
    },
    {
        initialRouteName: 'Main',
        contentComponent: DrawerNavigatorComponent,
        drawerPosition: "right",
        drawerWidth: Dimensions.get('window').width / 2.2,
        drawerType: 'slide',
    }
);

const MainContainer = createAppContainer(MainNavigator);

export default MainContainer