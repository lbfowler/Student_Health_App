import React, { createContext } from 'react';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/login/index'
import AsyncStorage from '@react-native-community/async-storage';
import StackNav from './mainComponents/stackHeaderState'
import NavigationService from './NavigationService';
global.AppAccessToken = null;


const InitialNavigator = createStackNavigator({
    Login: LoginScreen,
    App: StackNav,
},
{
    initialRouteName: 'Login',
    headerMode: 'none'
}
);

const AppContainer = createAppContainer(InitialNavigator);
class What extends React.Component {
    static router = InitialNavigator.router
    constructor(props) {
        super(props)
    }
    render () {
        console.log("InitialNav rendering")
        let {navigation} = this.props
        console.log(this)
        console.log(AppContainer.screenProps)
        return (
            <AppContainer 
              screenProps={{...this.props.screenProps, rootNavigation: this.props.navigation}}
              navigation={navigation}
              />
        );
    }
}
const ProfileNavigator = createStackNavigator({
    Top: { screen: What },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        initialRouteName: 'Top'
});

const Wrapper = createAppContainer(ProfileNavigator);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: 'false'
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
    render() {

        console.log("Top level component rendered")
        console.log(this)
        return (
            <Wrapper
                screenProps={{ darkMode: this.state.darkMode, updateDarkMode: this.updateDarkMode.bind(this), ...this.props }}
                // navigation={{}}
                
            />
        );
    }
}
export default App;





