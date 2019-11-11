import React, { createContext } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/login/index'
import MainNavigator from './mainComponents/DrawerNavigator'
import Svg, { Path } from 'react-native-svg';
import { UserProvider } from './ContextComponent';
import StateDNV from './mainComponents/drawerNavState'
import AsyncStorage from '@react-native-community/async-storage';
import StackNav from './mainComponents/stackHeaderState'

global.AppAccessToken = null;


const InitialNavigator = createSwitchNavigator({
    Login: LoginScreen,
    App: StackNav,
},
{
    initialRouteName: 'Login'
}
);

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            darkMode: 'false'
        }
    }
    componentDidMount() {
        getMode = async () => {
            try {
                const value = await AsyncStorage.getItem('@DarkMode');
                console.log(value)
                if (value === null) {
                    this.updateDarkMode(value);
                } else {
                    this.setState({darkMode: value})
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMode();
    }
    updateDarkMode(val) {
        this.setState({darkMode: val})
        const setData = async () => {
            try {
                await AsyncStorage.setItem('@DarkMode', val);
            } catch (error) {
                console.log(error);
            }
        }
        setData();
    }
    render() {
        return (
            <AppContainer 
                screenProps={{mode: this.state.darkMode, update: this.updateDarkMode.bind(this)}}
            />
        );
    }
}
export default App;





