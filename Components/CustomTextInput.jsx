import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function CustomTextInput() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [display, setDisplay] = useState(false);

  const blankText = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
          color: "blue",
        }}
      >
        {" "}
        I Am Learning TextInput
      </Text>

      <TextInput
        placeholder="Enter Your Name"
        style={styles.container}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        placeholder="Enter Email Address"
        style={styles.container}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Enter Password"
        style={styles.container}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 10 }}> Your Name is {name}</Text>
            <Text style={{ fontSize: 10 }}> Your Email is {email}</Text>
            <Text style={{ fontSize: 10 }}> Your Password is {password}</Text>
          </View>
        ) : null}
      </View>

      <Button title="Your Output Text" onPress={() => setDisplay(true)} />

      <View style={{ marginTop: 4 }}>
        <Button
          title="Clear Text"
          onPress={() => 
            blankText() }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "black",
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    height: 40,
  },
});
