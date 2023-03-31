import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DiceElement = ({ numberOnDiceSide }) => {
  return (
    <View>
      <Text style={styles.dice}>{numberOnDiceSide}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dice: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "green",
    color: "white",
    marginHorizontal: 10,
    borderRadius: 15,
  },
});

export default DiceElement;
