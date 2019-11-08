import React, { createContext } from 'react';

const UserContext = createContext({
    profUri: '',
    updateProfUri: () => { },
});

export class UserProvider extends React.Component {
    updateProfUri = newUri => {
        this.setState({ profUri: newUri });
    };

    state = {
        profUri: null,
        updateProfUri: this.updateProfUri,
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export const UserConsumer = UserContext.Consumer;