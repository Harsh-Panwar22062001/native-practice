import React from "react";

import { StyleSheet, View } from "react-native";
import Imagestut from "./Components/Imagestut";





export default function App() {
  return (
    <View style={styles.container}>
    <Imagestut/>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});
