import React from "react";
import {  StyleSheet, View } from "react-native";

import Gridio from "./Components/Grid.jsx";


export default function App() {
  return (
    <View style={styles.container}>
   

   <Gridio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    backgroundColor: "#f0f0f0",
    padding: 20,
    width:120 ,
    height: 120,
  },
});
