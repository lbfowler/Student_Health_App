import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import styles from './index.style'

export default class SideDrawer extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Side Drawer</Text>
            </View>
        )
    }
}