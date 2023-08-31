import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const TriesCount = ({attempts}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attempts</Text>
      <Text style={styles.value}>{attempts}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    paddingTop: 40,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "dotted",
    borderColor: "red"
  },
  title: {
    top: -30,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  value: {
    top: -25,
    fontWeight: "bold",
    fontSize: 48,
    color: "white",
    textAlign: "center",
  }
});

export default TriesCount;