import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

export default function flatItem() {
  const list = [
    {
      id: 1,
      name: "Harsh",
    },
    {
      id: 2,
      name: "Akash",
    },
    {
      id: 3,
      name: "Ritik",
    },
    {
      id: 4,
      name: "Gunjan",
    },
    {
      id: 5,
      name: "Harsh",
    },
  ];

  return (
    <View>
      <Text> The List are mention are </Text>

      <FlatList
        data={list}
        renderItem={({ item }) => <Text style={styles.list2}>{item.name}</Text>}
        keyExtractor={() => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    margin: 10,
    padding: 10,
  },
});
