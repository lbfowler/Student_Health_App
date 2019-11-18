/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProfileScreen from '../screens/profile';
import SampleScreen from '../screens/academic';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

it('renders correctly', () => {
  const tree = renderer.create(
    <ProfileScreen/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(
    <SampleScreen/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
