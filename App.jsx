import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DiceHolder from "./src/Components/Dice/DiceHolder";
import ButtonArea from "./src/Components/Selectors/Actions/ButtonArea";
import { dieSideReducer } from "./src/Reducers/dieSideReducer";
import { experimentalReducer } from "./src/Reducers/experimentalReducer";
import { returnRandomNum } from "./src/Helpers/returnRandomNum";
import { DiceContext } from "./src/Context/diceContext";
import { useReducer, useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("re-render");
  });
  const initialExperimentalState = { dies: [0, 0, 0] };
  const [stateExperimental, dispatchExperimental] = useReducer(
    experimentalReducer,
    initialExperimentalState
  );
  const [state, dispatch] = useReducer(dieSideReducer, {
    dieValue: 0,
    totalScore: 0,
  });
  return (
    <DiceContext.Provider value={{ stateExperimental, dispatchExperimental }}>
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <DiceHolder />
        <ButtonArea />
      </View>
    </DiceContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});
