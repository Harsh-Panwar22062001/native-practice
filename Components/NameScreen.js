import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function NameScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleNameSubmit = () => {
    navigation.navigate('Greeting', { name });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the text"
        onChangeText={setName}
        value={name}
      />
      <Button title="Submit" onPress={handleNameSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
