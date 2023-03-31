import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DiceElement from "./DiceElement";
import ResultDisplayer from "../Informational/ResultDisplayer";
const DiceHolder = () => {
  return (
    <View style={styles.container}>
      <ResultDisplayer valueToDisplay="Total: 9" />
      <View style={styles.diceContainer}>
        <DiceElement numberOnDiceSide={2} />
        <DiceElement numberOnDiceSide={2} />
        <DiceElement numberOnDiceSide={2} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },

  diceContainer: {
    flexDirection: "row",
  },
});
export default DiceHolder;
