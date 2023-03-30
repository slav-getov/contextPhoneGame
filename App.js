import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ActionableButton from "./src/Components/Shared/ActionableButton";
import DiceElement from "./src/Components/Dice/DiceElement";
import { dieSideReducer } from "./src/Reducers/dieSideReducer";
import { experimentalReducer } from "./src/Reducers/experimentalReducer";
import { returnRandomNum } from "./src/Helpers/returnRandomNum";
import { useReducer } from "react";
export default function App() {
  const initialExperimentalState = { dies: [0, 0, 0] };
  const [stateExperimenatl, dispatchExperimental] = useReducer(
    experimentalReducer,
    initialExperimentalState
  );
  const [state, dispatch] = useReducer(dieSideReducer, {
    die: 0,
    totalScore: 0,
  });
  return (
    <View style={styles.container}>
      <View>
        {console.log(stateExperimenatl)}
        <Text>Roll the dice and try your luck!</Text>
        <StatusBar style="auto" />
        <DiceElement numberOnDiceSide={state.die} />
      </View>
      {console.log("hey")}
      <ActionableButton
        title="Roll Dice"
        onClick={() => {
          dispatch({ type: "roll_die", randomNum: returnRandomNum() });
          dispatchExperimental({
            type: "fill_die",
            values: [returnRandomNum(), returnRandomNum(), returnRandomNum()],
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
