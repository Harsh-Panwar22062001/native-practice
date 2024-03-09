import { View, Text, TouchableOpacity, Animated as RNAnimated } from "react-native";
import React, { useRef, useState } from "react";

export default function AnimatedComponent() {
  const animation = useRef(new RNAnimated.Value(0)).current;

  const [btnClicked , setBtnClicked] = useState(false);

  const startAnimation = () => {
    RNAnimated.timing(animation, {
      toValue: btnClicked?0:1,
      duration:1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RNAnimated.View
        style={[
          { backgroundColor: "orange", width: 100, height: 100 , borderRadius : btnClicked? 50 :0, },
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),

               
              },

              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg' , '360deg'],
                }),
              },

              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0 , 150],
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1 , 0.5],
                }),
              },

            ],
          },
        ]}
      ></RNAnimated.View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          width: 150,
          height: 50,
          marginTop: 30,
          justifyContent: "center",
          padding: "10px",
        }}
        onPress={() => {
          setBtnClicked(!btnClicked);
          startAnimation();
        }}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
