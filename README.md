[![<AlejandroFabianCampos>](https://circleci.com/gh/AlejandroFabianCampos/react-native-awesome-text-input.svg?style=svg)](https://circleci.com/gh/AlejandroFabianCampos/react-native-awesome-text-input)
[![codecov](https://codecov.io/gh/AlejandroFabianCampos/react-native-awesome-text-input/branch/develop/graph/badge.svg)](https://codecov.io/gh/AlejandroFabianCampos/react-native-awesome-text-input)

# react-native-awesome-text-input
A simple lib to share an easy to implement animated custom text input for React native

![Awesome Text Input Demo](examples/gifs/AwesomeTextInput1-1-2-testgif1.gif)
![Awesome Text Input Demo](examples/gifs/AwesomeTextInput1-1-2-testgif2.gif)

## How to install 
With npm:
`npm i react-native-awesome-text-input`

With yarn: 
`yarn add react-native-awesome-text-input`

## Examples

### Simple label input

```javascript
import { AwesomeTextInput } from 'react-native-awesome-text-input';

export default function App() {
  return (
    <AwesomeTextInput label="Simple label" />
  );
}
```

### Password input 

```javascript
import { AwesomeTextInput } from 'react-native-awesome-text-input';

export default function App() {
  return (
    <AwesomeTextInput label="Password" secureTextEntry={true} />
  );
}
```

### All round bordered input 

```javascript
import { AwesomeTextInput } from 'react-native-awesome-text-input';

export default function App() {
  return (
    <AwesomeTextInput 
      label="Bordered input" 
      customStyles={{ 
        container: { 
          borderWidth: 1, 
          borderColor: 'grey', 
          borderRadius: 10 
        }, 
        title: { 
          backgroundColor: "white" 
        } 
      }} />
  );
}
```

## API

| Prop | Values | Example |
| ---- | -------- | ---- |
| label | string | Example label |
| customStyles | { <br> container?: ReactNative.ViewStyle, <br> title?: ReactNative.TextStyle, <br> inputContainer?: ReactNative.ViewStyle <br> } | { <br> container: { borderRadius: 5, backgroundColor: 'purple' } , <br> title: { color: "white" }, <br> inputContainer: { backgroundColor: 'blue' } <br> } |
| ...any ReactNative.TextInput props | [ReactNative.TextInput props](https://reactnative.dev/docs/textinput#props) | secureTextEntry: true <br><br> // Hide the text input for passwords |


### Are pull requests and feature requests welcomed? 
For sure! Don't hesitate to open issues with the `enhancement` tag or open pull requests for bugfixes/enhancements.
