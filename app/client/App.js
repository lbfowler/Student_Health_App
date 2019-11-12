import React, { createContext } from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import LoginScreen from './screens/login/index'
import AsyncStorage from '@react-native-community/async-storage';
import StackNav from './mainComponents/stackHeaderState'

global.AppAccessToken = null;

const InitialNavigator = createSwitchNavigator({
    Login: LoginScreen,
    App: StackNav,
},
    {
<<<<<<< Updated upstream
        initialRouteName: 'Login'
    }
);

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
    constructor() {
        super();
=======
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);

const Sigh = createAppContainer(InitialNavigator);

class App extends React.Component {
    static router = Sigh.router;
    constructor(props) {
        super(props);
>>>>>>> Stashed changes
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
    render() {
        console.log(Sigh.router)
        return (
<<<<<<< Updated upstream
            <AppContainer
                screenProps={{ darkMode: this.state.darkMode, updateDarkMode: this.updateDarkMode.bind(this) }}
=======
            <Sigh
                screenProps={{ 
                    darkMode: this.state.darkMode, 
                    updateDarkMode: this.updateDarkMode.bind(this),
                     ...this.props,
                     rootNavigation: this.props.navigation
                     }}
                     //navigation={this.props}
>>>>>>> Stashed changes
            />
        );
    }
}
export default App;





