import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer"

import Home from "../home/index";
import Profile from "../profile/index";

const HamburgerNavigation = createDrawerNavigator(
    {
        Profile: Profile,
        DefaultScreen: {
            screen: Home,
        }
    },
    {
        initialRouteName: 'DefaultScreen',
        
        
    }
 );
export default createAppContainer(HamburgerNavigation);