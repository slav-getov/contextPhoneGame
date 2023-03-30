export const experimentalReducer = (state, action) => {
  if (action.type == "fill_die") {
    return {
      dies: action.values,
    };
  }
};
