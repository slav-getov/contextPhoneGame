import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import ActionableButton from "./src/Components/Shared/ActionableButton";
import DiceElement from "./src/Components/Dice/DiceElement";
import TestElement from "./src/Components/Test/TestElement";
import DiceHolder from "./src/Components/Dice/DiceHolder";
import ButtonArea from "./src/Components/Selectors/Actions/ButtonArea";
import { dieSideReducer } from "./src/Reducers/dieSideReducer";
import { experimentalReducer } from "./src/Reducers/experimentalReducer";
import { returnRandomNum } from "./src/Helpers/returnRandomNum";
import { useReducer, useEffect } from "react";
export default function App() {
  useEffect(() => {
    console.log("re-render");
  });
  const initialExperimentalState = { dies: [0, 0, 0] };
  const [stateExperimenatl, dispatchExperimental] = useReducer(
    experimentalReducer,
    initialExperimentalState
  );
  const [state, dispatch] = useReducer(dieSideReducer, {
    dieValue: 0,
    totalScore: 0,
  });
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.diceResultContainer}>
        {console.log(stateExperimenatl)}
        <Text>Roll the dice and try your luck!</Text>

        <DiceElement numberOnDiceSide={state.dieValue} />
      </View>

      <ActionableButton
        title="Roll Dice"
        onClick={() => {
          dispatch({ type: "roll_die", randomNum: returnRandomNum() });
          dispatchExperimental({
            type: "fill_die",
            values: [returnRandomNum(), returnRandomNum(), returnRandomNum()],
          });
        }}
      /> */}
      {/* <TestElement title="hey" /> */}
      <StatusBar hidden />
      <DiceHolder />
      <ButtonArea />

      {/* <View>
        <Text>Some other text</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});
