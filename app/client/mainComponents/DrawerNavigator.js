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
import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../screens/home/index'
import LoginScreen from '../screens/login/index'
import SampleScreen from '../screens/sample/index'
import SettingsScreen from '../screens/settings/index'
import AboutScreen from '../screens/about/index'
import { Dimensions } from "react-native";
import TabNav from './TabNavigator'
import DrawerNavigatorComponent from './DrawerNavigatorComponent'
import {
    createAppContainer,
} from 'react-navigation';

const MainNavigator = createDrawerNavigator(
    {
        TabNav: {
            screen: TabNav
        },
        Login: {screen: LoginScreen},
        Sample: {screen: SampleScreen},
        Home: {screen: HomeScreen},
        Settings: {screen: SettingsScreen},
        About: {screen: AboutScreen},
    },
    {
        initialRouteName: 'TabNav',
        contentComponent: DrawerNavigatorComponent,
        drawerPosition: "right",
        drawerWidth: Dimensions.get('window').width / 2.2,
        drawerType: 'slide',
    }
);

const DrawerContainer = createAppContainer(MainNavigator)

class StateDNV extends React.Component {
    static router = DrawerContainer.router;
    constructor(props) {
        super(props);
        this.state = { uri: 0}
    }
    handleMessage(data) {
        this.setState({ uri: data});
    }
    render() {
        console.log(this)
        let {navigation} = this.props;
        return (
            <DrawerContainer screenProps={{ ...this.props.screenProps ,status: this.state, postMessage: this.handleMessage.bind(this)}} 
            navigation={navigation}/>
        )
    }
}

export default StateDNV;
