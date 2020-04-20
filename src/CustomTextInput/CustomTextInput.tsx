import * as React from 'react'
import { TextInput, View, TextInputProps } from 'react-native'

export const CustomTextInput: React.FC<TextInputProps> = ({...props}) => (
    <View>
        <TextInput {...props}/>
    </View>
)
