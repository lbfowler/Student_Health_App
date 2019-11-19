import 'react-native';
import React from 'react';
import Login from '../screens/login/index'

import renderer from 'react-test-renderer'
import MockAsyncStorage from 'mock-async-storage'

const mockImpl = new MockAsyncStorage();

jest.mock('@react-native-community/async-storage', () => mockImpl)

it('Login screen render test', () =>{
    const tree = renderer.create(
        <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
