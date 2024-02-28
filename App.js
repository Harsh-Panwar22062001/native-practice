import React from "react";
import { StyleSheet } from "react-native";
import NameInputScreen from "./Components/NameInputScreen";
import { NavigationContainer } from "@react-navigation/native";
import GreetingScreen from "./Components/GreetingScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NameInput">
      <Stack.Screen name="Name Input" component={NameInputScreen} />

        
        <Stack.Screen name="Greeting" component={GreetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});
