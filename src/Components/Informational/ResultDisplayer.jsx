import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ResultDisplayer = ({ valueToDisplay }) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayerText}>{valueToDisplay}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  displayContainer: {
    alignSelf: "center",
    backgroundColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  displayerText: {
    color: "lightgray",
  },
});
export default ResultDisplayer;
