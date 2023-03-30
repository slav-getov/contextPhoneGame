import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ActionableButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "blue",
    color: "white",
    //some basic shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default ActionableButton;
