import { View, Text ,Image , StyleSheet, ImageBackground} from "react-native";
import React from "react";

export default function Imagestut() {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
      <Text style ={{fontSize:20,  color:'yellow'}}>
      This is my image</Text>
        <Image  style ={{height:100 ,
        width:100 , display:'covered'}}
          source={{
            uri: "https://dharmapublication.com/wp-content/uploads/2023/08/Firefly-A-Beautiful-Island-at-the-middle-of-the-ocean-surrounding-a-huge-jungle-at-night-moon-hd-3.jpg",
          }}
        ></Image>

        <ImageBackground   style={{width:200 ,
        height:300 , backgroundColor:'red'}} source={{uri:"https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/04160831/MBA-HR-syllabus.jpg"}}>
        
        <Text style ={{ fontSize:30 , fontWeight:600 , color:'orange'}}>This is Background image</Text>  </ImageBackground>
      </View>
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

  cover: {
    // width: 100,
    // height: 100,
    // backgroundColor: "red",
  },
});
