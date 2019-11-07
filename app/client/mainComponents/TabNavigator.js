import React, { Component } from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from '../screens/login/index'
import HomeScreen from '../screens/home/index'
import SampleScreen from '../screens/sample/index'
import ProfileScreen from '../screens/profile/index'
import JournalScreen from '../screens/journal/index'
import AcademicScreen from '../screens/academic/index'
import SurveyScreen from '../screens/survey/index'

import { createStackNavigator } from 'react-navigation-stack';


const ProfileNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen },
    Academic: { screen: AcademicScreen},
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppNavigator = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileNavigator,
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
            inactiveTintColor: 'gray',
        },
        backBehavior: "history"
    }
);

export default AppNavigator