import React from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { AwesomeTextInput } from "../../src";

storiesOf('AwesomeTextInput', module)
  .addDecorator( component => 
    <View 
      style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 30 }}
    >
      {component()}
      <View style={{ paddingTop: 20 }}>
        <Button 
          title="Dismiss keyboard"
          onPress={Keyboard.dismiss}
        />
      </View>
    </View>
  )
  .add('Common', () => (
    <AwesomeTextInput 
      onFocus={() => console.log('was focused')}
      onChangeText={(e) => console.log('something changed', e)}
      onBlur={() => console.log('was blurred')}
      placeholder="asd"
    />
  ))
  .add('With label', () => (
    <AwesomeTextInput 
      onFocus={() => console.log('was focused')}
      onChangeText={(e) => console.log('something changed', e)}
      onBlur={() => console.log('was blurred')}
      label="Your label"
    />
  ))
