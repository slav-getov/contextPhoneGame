import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DiceElement from "./DiceElement";
import ResultDisplayer from "../Informational/ResultDisplayer";
import { DiceContext } from "../../Context/DiceContext";
const DiceHolder = () => {
  const { stateExperimental } = useContext(DiceContext);
  //console.log(stateExperimental);
  return (
    <View style={styles.container}>
      {/* <ResultDisplayer valueToDisplay="Total: 9" /> */}
      {/* <View style={styles.diceContainer}> */}
      <FlatList
        style={styles.marker}
        data={stateExperimental}
        renderItem={({ item }) => <DiceElement numberOnDiceSide={item.value} />}
        keyExtractor={(item) => "aha"}
        numColumns={3}
        ListHeaderComponent={<ResultDisplayer valueToDisplay="Total: 9" />}
        contentContainerStyle={styles.content}
      />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },

  diceContainer: {
    flexDirection: "row",
  },

  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
    padding: 10,
  },
});
export default DiceHolder;
