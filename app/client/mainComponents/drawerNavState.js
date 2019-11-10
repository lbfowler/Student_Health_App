import React from 'react'
import DNV from './DrawerNavigator'

class StateDNV extends React.Component {
    static router = DNV.router;
    constructor() {
        super();
        this.state = { some: 1}
    }
    handleMessage(data) {
        this.setState({some: data});
    }
    render() {
        let {navigation} = this.props;
        return (
            <DNV screenProps={{status: this.state, postMessage: this.handleMessage.bind(this)}} 
            navigation={navigation}/>
        )
    }
}

export default StateDNV;