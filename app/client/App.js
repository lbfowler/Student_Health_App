import React, { createContext } from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/login/index'
import RegisterScreen from './screens/register/index'
import AsyncStorage from '@react-native-community/async-storage';
import StackNav from './mainComponents/stackHeaderState'
import SplashScreen from './screens/splash/index';
global.AppAccessToken = null;

const AuthStack = createAppContainer(createStackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        initialRouteName: 'Login'
}));
// const ProfileContainerState = createAppContainer(ProfileNavigator);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: 'false',
            loggedIn: null
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
                if (true || value === null) {
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
        if (this.state.loggedIn == true) {
            return (
                <StackNav
                    screenProps={{
                        darkMode: this.state.darkMode, updateDarkMode: this.updateDarkMode.bind(this),
                        ...this.props.screenProps,
                        onLogOutPress: this.logOut.bind(this)
                    }}
                />
            )
        } else if (this.state.loggedIn == false){
            return (
                <AuthStack
                    screenProps={{onLoginPress: this.logIn.bind(this)}}
                    // onLoginPress={this.logIn.bind(this)}
                />
            )
        } else {
            return (
                <SplashScreen />
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





