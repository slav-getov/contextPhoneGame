import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ActionableButton from "../../Shared/ActionableButton";
import { DiceContext } from "../../../Context/diceContext";
const ButtonArea = () => {
  const { dispatchExperimental } = useContext(DiceContext);
  console.log(dispatchExperimental);
  return (
    <View style={styles.container}>
      <ActionableButton
        title="Roll Dice"
        style={styles.button}
        onClick={() => console.log("you clicked!")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "blue",
    color: "black",
  },
});
export default ButtonArea;
