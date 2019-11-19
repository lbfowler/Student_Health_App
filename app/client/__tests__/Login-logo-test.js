import 'react-native';
import React from 'react';
import LoginLogo from '../screens/login/logo'

import renderer from 'react-test-renderer'

it('Login screen render test', () =>{
    const tree = renderer.create(
        <LoginLogo />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
