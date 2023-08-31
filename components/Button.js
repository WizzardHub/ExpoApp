import React from 'react';
import {Pressable, StyleSheet, Text} from "react-native";

const Button = ({text, onPress}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}>

      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: "rgba(40, 40, 50, 1)",
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Button;