import { View, Text, StyleSheet } from "react-native";
import React from "react";
// Adjust the path if necessary

export default function Gridio() {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <Text style={styles.item}>Grid View</Text>
      <Text style={styles.item}>Grid Koiyo</Text>
      <Text style={styles.item}>Grid Joint</Text>
      <Text style={styles.item}>Grid Ballon</Text>

      <Text style={styles.item}>Grid View</Text>
      <Text style={styles.item}>Grid New</Text>
      <Text style={styles.item}>Grid Fun</Text>
      <Text style={styles.item}>Grid Uum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin:5 ,
    padding:5 , 
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:25 ,
    color: "#ffffff", // Set the text color to black
    fontSize: 25,
  },
});
