import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import GreetingScreen from "./Components/GreetingScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NameScreen from "./Components/NameScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NameInput">
      <Stack.Screen name="NameInput" component={NameScreen} />
<Stack.Screen name="Greeting" component={GreetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",

//   },
// });
