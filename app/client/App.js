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
        getLogin = async () => {
            try {
                const value = await AsyncStorage.getItem('@LoggedIn');
                value = null;
                if (value === null) {
                    this.setState({loggedIn: false});
                } else {
                    this.setState({ loggedIn: value == 'true' ? true : false })
                }
            } catch (error) {
                console.log(error);
            }
        }
        getLogin();
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
        this.setState({ loggedIn: false });
        const setLogin = async () => {
            try {
                await AsyncStorage.setItem('@LoggedIn', 'false');
            } catch (error) {
                console.log(error);
            }
        }
        setLogin();
    }
    logIn() {
        this.setState({ loggedIn: true });
        const setLogin = async () => {
            try {
                await AsyncStorage.setItem('@LoggedIn', 'true');
            } catch (error) {
                console.log(error);
            }
        }
        setLogin();
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
                    onLoginPress={this.logIn.bind(this)}
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





