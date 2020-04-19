import React from 'react';
import { CustomTextInput } from '../CustomTextInput';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CustomTextInput placeholder="Placeholder" />).toJSON();
  expect(tree).toMatchSnapshot();
});