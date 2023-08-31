import React from 'react';
import {StyleSheet, Text} from "react-native";

const Title = ({text}) => {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    width: 300,
    textAlign: "center",
    paddingVertical: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "dotted",
    borderColor: "blue"
  }
});

export default Title;