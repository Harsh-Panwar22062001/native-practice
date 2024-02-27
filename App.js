import { StyleSheet, View } from "react-native";
import Custombutton from "./Components/Custombutton";

export default function App() {



  const handlePress =()=>{
    alert("button clicked");
  }
  return (
      // <View style={styles.container}>
      // <View style={styles.box2} />
      // <View style={styles.box3} />
      // <View style={styles.box5} />
      // <View style={styles.box4} />
      // </View>


      <View>

<Custombutton  title ="hello harsh"  onPress = {handlePress} />

      </View>
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

  box2: {
    width: 200,
    height: 100,
    backgroundColor: "red",
  },

  box3: {
    width: 200,
    height: 100,
    backgroundColor: "blue",
  },

  box4: {
    display: "flex",
    width: 200,
    height: 20,

    flex: 67,

    backgroundColor: "white",
  },
});
