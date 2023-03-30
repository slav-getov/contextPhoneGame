export const dieSideReducer = (state, action) => {
  if (action.type == "roll_die") {
    return {
      ...state,
      die: action.randomNum,
    };
  }
};
