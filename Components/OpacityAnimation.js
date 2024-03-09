import { StyleSheet, Animated, Button, View } from "react-native";
import React, { useEffect } from "react";

export default function OpacityAnimation() {
  const opacity = new Animated.Value(0);
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Button title="Press Me" onPress={() => console.log("Button Pressed")} />
      {/* <Text>OpacityAnimation</Text> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
