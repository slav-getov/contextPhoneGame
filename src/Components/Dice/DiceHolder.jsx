import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DiceElement from "./DiceElement";
import ResultDisplayer from "../Informational/ResultDisplayer";
const DiceHolder = () => {
  return (
    <View style={styles.container}>
      <ResultDisplayer valueToDisplay="Total: 9" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 10,
  },
  displayerStyle: {
    color: "white",
  },
});
export default DiceHolder;
