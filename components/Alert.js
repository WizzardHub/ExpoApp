import React from 'react';
import {StyleSheet, Text} from "react-native";

const Alert = ({text}) => {
  return (
    <Text style={styles.alert}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  alert: {
    width: 300,
    textAlign: "center",
    paddingVertical: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "purple",
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "dotted",
    borderColor: "purple"
  }
});

export default Alert;