import 'react-native';
import React from 'react';
import ProfileScreen from '../screens/profile/index'
import UserAPI from '../api/user.api'

import renderer from 'react-test-renderer'
import MockAsyncStorage from 'mock-async-storage'
import { tsExternalModuleReference } from '@babel/types';

const mockImpl = new MockAsyncStorage();

jest.mock('@react-native-community/async-storage', () => mockImpl)

it('Profile screen render test', () =>{
    const tree = renderer.create(
        <ProfileScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

/*Not quite right
test('username is the same as user', () =>{
    const user = UserAPI.loginAsync('hfang','123456');
    expect(UserAPI.getUserInfoAsync(user)).toBe("Han Fang");
})*/