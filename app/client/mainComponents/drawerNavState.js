import React from 'react'
import DNV from './DrawerNavigator'

class StateDNV extends React.Component {
    static router = DNV.router;
    constructor(props) {
        super(props);
        this.state = { uri: 0}
    }
    handleMessage(data) {
        this.setState({ uri: data});
    }
    render() {
        let {navigation} = this.props;
        console.log("DrawerNavState rendered")
        return (
            <DNV screenProps={{ ...this.props.screenProps ,status: this.state, postMessage: this.handleMessage.bind(this)}} 
            navigation={navigation}/>
        )
    }
}

export default StateDNV;