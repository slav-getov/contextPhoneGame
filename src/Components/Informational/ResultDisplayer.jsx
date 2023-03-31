import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DiceContext } from "../../Context/diceContext";
const ResultDisplayer = ({ valueToDisplay }) => {
  const { stateExperimental } = useContext(DiceContext);
  console.log(stateExperimental);
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayerText}>{"hey"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  displayContainer: {
    alignSelf: "center",
    backgroundColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  displayerText: {
    color: "lightgray",
  },
});
export default ResultDisplayer;
