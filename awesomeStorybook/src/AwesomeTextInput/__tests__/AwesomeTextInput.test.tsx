import React from 'react';
import { AwesomeTextInput } from '../AwesomeTextInput';
import { fireEvent, render, wait } from '@testing-library/react-native';

jest.useFakeTimers();

test('renders correctly', async () => {
  const onFocus = jest.fn();
  const onChangeText = jest.fn(text => text);
  const onBlur = jest.fn();
  const onFocus2 = jest.fn();
  const onChangeText2 = jest.fn(text => text);
  const onBlur2 = jest.fn();
  const { getByTestId, getByText, queryByTestId, baseElement, rerender } = render(
      <AwesomeTextInput 
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  const testText1 = 'asd123';

  const input = getByTestId('input');
  fireEvent.focus(input);
  expect(onFocus).toHaveBeenCalledTimes(1);
  fireEvent.changeText(input, testText1);
  expect(onChangeText).toHaveBeenCalledTimes(1);
  expect(onChangeText.mock.results[0].value).toBe(testText1);
  fireEvent.blur(input);
  expect(onBlur).toHaveBeenCalledTimes(1);

  rerender(
    <AwesomeTextInput 
      onChangeText={onChangeText2}
      onFocus={onFocus2}
      onBlur={onBlur}
    />
  )

  // expect(baseElement).toMatchSnapshot();
  // const tree = renderer.create(<AwesomeTextInput />).toJSON();
  // expect(tree).toMatchSnapshot();
});