import React, { FC, useRef, useState, useEffect, useCallback } from 'react'
import { Animated, TextInput, View, TextInputProps, StyleSheet, ViewStyle, TextStyle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'

interface StyleStructure {
    container: ViewStyle,
    title: TextStyle,
    inputContainer: ViewStyle,
}

interface AwesomeTextInputProps extends TextInputProps {
    label?: string;
    customStyles?: Partial<StyleStructure>;
}

export const AwesomeTextInput: FC<AwesomeTextInputProps> = ({
    customStyles,
    label,
    ...commonTextInputProps
}) => {
    const styles: StyleStructure = {
        ...localStyles,
        ...customStyles
    }
    const [isFocused, setIsFocused] = useState(false)
    const [currentValueIsNone, setCurrentValueIsNone] = useState(true)
    const animateFocused = useRef(new Animated.Value(0)).current

    const customOnBlur = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        commonTextInputProps.onBlur && commonTextInputProps.onBlur(event);
    }, [setIsFocused, commonTextInputProps.onBlur])

    const customOnFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        commonTextInputProps.onFocus && commonTextInputProps.onFocus(event)
    }, [setIsFocused, commonTextInputProps.onFocus])

    const customOnChangeText = useCallback((text: string) => {
        if (currentValueIsNone === true && text !== '') {
            setCurrentValueIsNone(false)
        } else if (currentValueIsNone === false && text === '') {
            setCurrentValueIsNone(true)
        }
        commonTextInputProps.onChangeText && commonTextInputProps.onChangeText(text)
    }, [currentValueIsNone, setCurrentValueIsNone, commonTextInputProps.onChangeText])

    useEffect(() => {
        Animated.timing(animateFocused, {
            useNativeDriver: false,
            toValue: !isFocused && currentValueIsNone ? 0 : 1,
            duration: 300
        }).start()
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Animated.Text style={[
                styles.title, 
                {
                    top: animateFocused.interpolate({
                        inputRange: [0, 1],
                        outputRange: [12, -10]
                    }),
                    fontSize: animateFocused.interpolate({
                        inputRange: [0, 1],
                        outputRange: [18, 14]
                    }) 
                }
            ]}>
                {label}
            </Animated.Text>
            <View style={styles.inputContainer}>
                <TextInput
                    {...commonTextInputProps}
                    onFocus={customOnFocus}
                    onBlur={customOnBlur}
                    onChangeText={customOnChangeText}
                    testID="input"
                />
            </View>
        </View>
    )
}

const localStyles: StyleStructure = StyleSheet.create({
    container: {
        width: '100%'
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 5,
        padding: 10,
        width: '100%'
    },
    title: {
        position: "absolute",
        left: 10
    }
})
