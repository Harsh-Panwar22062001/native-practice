import React from "react";
import {  StyleSheet, View } from "react-native";
import FlatItem from './Components/FlatList.jsx'


export default function App() {
  return (
    <View style={styles.container}>
     <FlatItem/>
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
