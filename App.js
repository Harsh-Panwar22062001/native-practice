import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  const [name, setName] = useState("Harsh");

  const update = () => {
    setName("Aryan");
  };

  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: "yellow" }}>
        This is parent component
      </Text>
      <Button
        style={{
          width: 50,
          height: 70,
          backgroundColor: "blue",
          padding: 10,
          marginTop: 5,
        }}
        title="Update Name"
        onPress={update}
      ></Button>

      <User name={name} />
    </View>
  );
}

const User = (props) => {
  console.warn();

  return (
    <View>
      <Text style={{ backgroundColor: "red", marginTop: 20 , color:'white' }}>
        This is child {props.name} component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});
