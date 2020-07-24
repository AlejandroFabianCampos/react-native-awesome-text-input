import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AwesomeTextInput } from 'react-native-awesome-text-input';

export default function App() {
  return (
    <View style={styles.container}>
      <AwesomeTextInput
        onFocus={() => console.log("was focused")}
        onChangeText={(e: any) => console.log("something changed", e)}
        onBlur={() => console.log("was blurred")}
        label="Bordered input"
        customStyles={{
          container: { borderWidth: 1, borderColor: "grey", borderRadius: 10 },
          title: { backgroundColor: "white" },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
