import React, { createContext } from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/login/index'
import AsyncStorage from '@react-native-community/async-storage';
import StackNav from './mainComponents/stackHeaderState'
global.AppAccessToken = null;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: 'false',
            loggedIn: false
        }
    }
    componentDidMount() {
        getMode = async () => {
            try {
                const value = await AsyncStorage.getItem('@DarkMode');
                console.log("Darkmode is")
                console.log(value)
                if (value === null) {
                    this.updateDarkMode(value);
                } else {
                    this.setState({ darkMode: value })
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMode();
    }
    updateDarkMode(val) {
        this.setState({ darkMode: val })
        console.log("New value: " + val)
        const setData = async () => {
            try {
                await AsyncStorage.setItem('@DarkMode', val);
            } catch (error) {
                console.log(error);
            }
        }
        setData();
    }
    logOut() {
        this.setState({ loggedIn: false })
    }
    render() {
        if (this.state.loggedIn) {
            return (
                <StackNav
                    screenProps={{
                        darkMode: this.state.darkMode, updateDarkMode: this.updateDarkMode.bind(this),
                        ...this.props.screenProps,
                        onLogOutPress: this.logOut.bind(this)
                    }}
                />
            )
        } else {
            return (
                <LoginScreen
                    onLoginPress={() => this.setState({ loggedIn: true })}
                />
            )
        }
        // return (
        //     <Wrapper
        //         screenProps={{ darkMode: this.state.darkMode, updateDarkMode: this.updateDarkMode.bind(this), ...this.props.screenProps }}
        //     />
        // );
    }
}
export default App;





