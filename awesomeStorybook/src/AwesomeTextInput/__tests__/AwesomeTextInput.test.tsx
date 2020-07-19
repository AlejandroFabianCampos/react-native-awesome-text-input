import React from "react";
import { fireEvent, render, wait } from "@testing-library/react-native";
import { AwesomeTextInput } from "../AwesomeTextInput";

jest.useFakeTimers();

test("Matches snapshot", async () => {
	const { baseElement } = render(<AwesomeTextInput />);

	expect(baseElement).toMatchSnapshot();
});

test("Custom callbacks work correctly", async () => {
	const onFocus = jest.fn();
	const onChangeText = jest.fn((text) => text);
	const onBlur = jest.fn();
	const onFocus2 = jest.fn();
	const onChangeText2 = jest.fn((text) => text);
	const onBlur2 = jest.fn();

	const { getByTestId, rerender } = render(
		<AwesomeTextInput
			onChangeText={onChangeText}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
	const input = getByTestId("input");
	const testText1 = "asd123";

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
			onBlur={onBlur2}
		/>
	);

	fireEvent.focus(input);
	expect(onFocus2).toHaveBeenCalledTimes(1);
	fireEvent.changeText(input, testText1);
	expect(onChangeText2).toHaveBeenCalledTimes(1);
	expect(onChangeText2.mock.results[0].value).toBe(testText1);
	fireEvent.blur(input);
	expect(onBlur2).toHaveBeenCalledTimes(1);
});

test("Animates correctly without text input", () => {
	const onFocus = jest.fn();
	const onBlur = jest.fn();

	const { getByTestId } = render(
		<AwesomeTextInput onFocus={onFocus} onBlur={onBlur} />
	);
	const input = getByTestId("input");

	fireEvent.focus(input);
	expect(onFocus).toHaveBeenCalledTimes(1);
	fireEvent.blur(input);
	expect(onBlur).toHaveBeenCalledTimes(1);
});

test("Animates correctly when adding text and then removing it", () => {
	const onChangeText = jest.fn((text) => text);
	const onFocus = jest.fn();
	const onBlur = jest.fn();

	const { getByTestId } = render(
		<AwesomeTextInput
			onChangeText={onChangeText}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
	const input = getByTestId("input");
	const testText1 = "asd123";
	const testText2 = "";

	fireEvent.focus(input);
	expect(onFocus).toHaveBeenCalledTimes(1);
	fireEvent.changeText(input, testText1);
	fireEvent.changeText(input, testText2);
	expect(onChangeText).toHaveBeenCalledTimes(2);
	expect(onChangeText.mock.results[0].value).toBe(testText1);
	expect(onChangeText.mock.results[1].value).toBe(testText2);
	fireEvent.blur(input);
	expect(onBlur).toHaveBeenCalledTimes(1);
});
