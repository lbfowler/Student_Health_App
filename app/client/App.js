import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';



import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserAPI from './api/user.api'

import LoginScreen from './screens/login/index'
import HomeScreen from './screens/home/index'
import SampleScreen from './screens/sample/index'
import ProfileScreen from './screens/profile/index'
import JournalScreen from './screens/journal/index'
import AcademicScreen from './screens/academic/index'
import SideDrawer from './screens/sideDrawer/index'
import SurveyScreen from './screens/survey/index'

global.AppAccessToken = null;

const HomeNavigator = createSwitchNavigator({
    Profile: { screen: ProfileScreen },
    Survey: { screen: SurveyScreen },
    Home: { screen: HomeScreen },
    Sample: { screen: SampleScreen },
    Journal: { screen: JournalScreen },
});

const AppNavigator = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Profile'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="user" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Survey: {
            screen: SurveyScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Survey'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="file-text" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Home'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Resources: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Resouces'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="gears" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Journal: {
            screen: JournalScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Journal'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="pencil" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: 'crimson',
            inactiveTintColor: 'gray'
        }
    }
);

const InitialNavigator = createSwitchNavigator({
    Login: LoginScreen,
    App: AppNavigator
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

// const AppNavigator = createStackNavigator({
//     Login: { screen: LoginScreen },
//     Profile: { screen: ProfileScreen },
//     Survey: { screen: SurveyScreen },
//     Home: { screen: HomeScreen },
//     Sample: { screen: SampleScreen },
//     Journal: { screen: JournalScreen },
//     Academic: { screen: AcademicScreen },
//     Drawer: { screen: SideDrawer },
// },
//     {
//         headerMode: 'none',
//         navigationOptions: {
//             headerVisible: false,
//         }
//     });



// export default createAppContainer(AppNavigator);




