import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function CustomButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:'auto',
    alignItems:'center',
    justifyContent:'center'
   
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
