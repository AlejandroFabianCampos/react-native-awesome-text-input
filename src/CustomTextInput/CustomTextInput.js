import React from 'react'
import { TextInput, View } from 'react-native'

export const CustomTextInput = ({...props}) => (
    <View>
        <TextInput {...props}/>
    </View>
)
