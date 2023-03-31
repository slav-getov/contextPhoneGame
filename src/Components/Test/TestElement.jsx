import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TestElement = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    padding: 10,
  },
});
export default TestElement;
