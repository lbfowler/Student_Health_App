import 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/index'

import renderer from 'react-test-renderer'

it('Login screen render test', () =>{
    const tree = renderer.create(
        <HomeScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
