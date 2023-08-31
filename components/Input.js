import React from 'react';
import {StyleSheet, TextInput} from "react-native";

const Input = ({number, setNumber}) => {
  return (
    <TextInput value={number}
               placeholder="Enter a number ... (click me)"
               onChangeText={(number) => setNumber(number)}
               style={styles.input}
               placeholderTextColor="#FFF"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    textAlign: "center",
    paddingVertical: 40,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "orange",
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "dotted",
    borderColor: "orange"
  }
});

export default Input;