import React, { FC } from 'react'
import { TextInput, View, TextInputProps } from 'react-native'

export const CustomTextInput: FC<TextInputProps> = ({...props}) => (
    <View>
        <TextInput {...props}/>
    </View>
)
