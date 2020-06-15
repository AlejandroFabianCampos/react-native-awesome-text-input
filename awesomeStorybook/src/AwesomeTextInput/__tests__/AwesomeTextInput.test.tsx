import React from 'react';
import { AwesomeTextInput } from '../AwesomeTextInput';
import renderer from 'react-test-renderer';
import { jestPreset } from 'ts-jest';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<AwesomeTextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});