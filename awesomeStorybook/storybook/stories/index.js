import React from "react";
import {
	Text,
	View,
	Keyboard,
	TouchableWithoutFeedback,
	Button,
} from "react-native";

import { storiesOf } from "@storybook/react-native";

import { AwesomeTextInput } from "../../src";

storiesOf("AwesomeTextInput", module)
	.addDecorator((component) => (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				marginHorizontal: 30,
			}}
		>
			{component()}
			<View style={{ paddingTop: 20 }}>
				<Button title="Dismiss keyboard" onPress={Keyboard.dismiss} />
			</View>
		</View>
	))
	.add("Common", () => (
		<AwesomeTextInput
			onFocus={() => console.log("was focused")}
			onChangeText={(e) => console.log("something changed", e)}
			onBlur={() => console.log("was blurred")}
			placeholder="asd"
		/>
	))
	.add("Simple label input", () => (
		<AwesomeTextInput
			onFocus={() => console.log("was focused")}
			onChangeText={(e) => console.log("something changed", e)}
			onBlur={() => console.log("was blurred")}
			label="Your label"
		/>
	))
	.add("Password input", () => (
		<AwesomeTextInput
			onFocus={() => console.log("was focused")}
			onChangeText={(e) => console.log("something changed", e)}
			onBlur={() => console.log("was blurred")}
			label="Password"
			secureTextEntry={true}
		/>
	))
	.add("All round bordered input", () => (
		<AwesomeTextInput
			onFocus={() => console.log("was focused")}
			onChangeText={(e) => console.log("something changed", e)}
			onBlur={() => console.log("was blurred")}
			label="Bordered input"
			customStyles={{
				container: { borderWidth: 1, borderColor: "grey", borderRadius: 10 },
				title: { backgroundColor: "white" },
			}}
		/>
	));
