import { View, Text, StyleSheet , ScrollView } from "react-native";
import React from "react";

export default function flatItem() {
  const users = [
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


    {
      id: 6,
      name: "Akash",
    },
    {
      id: 7,
      name: "Ritik",
    },
    {
      id: 8,
      name: "Gunjan",
    },
    {
      id: 9,
      name: "Harsh",
    },

    {
      id: 10,
      name: "Akash",
    },
    {
      id: 11,
      name: "Ritik",
    },
    {
      id: 12,
      name: "Gunjan",
    },
    {
      id: 13,
      name: "Harsh",
    },
    {
      id: 14,
      name: "Gunjan",
    },
    {
      id: 15,
      name: "Harsh",
    },

  ];

  return (
    <View>

 

    <Text> The List are mention are </Text>   <ScrollView>


{

  users.map((items)=><Text  style ={styles.list2}>{items.name}</Text>)
}

    </ScrollView>
      

      {/* <FlatList
        data={list}
        renderItem={({ item }) => <Text style={styles.list2}>{item.name}</Text>}
        keyExtractor={() => item.id}
      /> */}
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
    padding: 5,
    color:'yellow',
  },
});
