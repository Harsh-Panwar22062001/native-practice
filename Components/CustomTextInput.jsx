import { View, Text, TextInput, StyleSheet  , Button } from "react-native";
import React  ,{useState} from "react";

export default function CustomTextInput() {


const [name , setName] = useState("");


  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 90,
          marginTop: 20,
          color: "blue",
        }}
      >
        {" "}
        I am Learning TextInput
      </Text>
      <Text>Your Name is :{name}</Text>
      <TextInput placeholder="Enter Your Name" style={styles.container}   value={name}  onChangeText={(text)=>setName(text)} />

      <Button   title = "Clear Text" onPress ={()=>setName("")}   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Color: "Yellow",
    fontSize: 10,
    border: "solid 1px black",
    borderWidth: 30,
    margin: 40,
    height: 40,
    weight: 90,
  },
});
