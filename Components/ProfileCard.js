import React from "react";
import { View, Text, StyleSheet , TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <img
        src="data:image/png;base64,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"
        alt="Avatar"
        style={styles.avatar}
      />
    
      {/* Name */}
      <Text style={styles.name}>Harsh</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        I am a student of Deenbandhu Chootu Ram University
      </Text>

      <View style={styles.socialLinks}>
        {/* Twitter */}
        <TouchableOpacity>
          <FontAwesome
            name="twitter"
            size={24}
            color="#1DA1F2"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Twitter */}
        <TouchableOpacity>
          <FontAwesome
            name="twitter"
            size={24}
            color="#1DA1F2"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity>
          <FontAwesome
            name="facebook"
            size={24}
            color="#4267B2"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* LinkedIn */}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
  },
  socialLinks: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
