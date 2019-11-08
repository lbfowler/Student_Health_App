import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image
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
import UALogo from './screens/header/UALogo'

global.AppAccessToken = null;

const StackNav = createStackNavigator({
    Main: {
        screen: MainNavigator,
        // navigationOptions: () => ({
        //     // header: {
        //     //     style: {
        //     //         height: 100
        //     //     }
        //     // },
        //     headerBackground: (
        //     // <UALogo style={{height: 500}}/>
        //     <View style={{alignContent: "center", alignSelf: "center",}}>
        //         {/* <UALogo style={{height: 500}}/> */}
        //         <Image style={{width:170, height: 50}} source={require('./back.png')}/>
        //     </View>
        //     ),
        //     headerRight: (
        //         <TouchableOpacity
        //             style={{width: 50, height: 50}}
        //             onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
        //             >
        //             <Text style={{color: 'black', fontSize: 16}}>-></Text>
        //         </TouchableOpacity>
        //     )
        // })
    }
},
{
    headerMode: "float",
    // navigationOptions: () => ({
    //     headerBackground: 
    //             < UALogo />
    // })
}
);

const InitialNavigator = createSwitchNavigator({
    Login: LoginScreen,
    App: StackNav,
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





