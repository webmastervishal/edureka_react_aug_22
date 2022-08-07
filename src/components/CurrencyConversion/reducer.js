import actions from "./actions";

const initialState = {
  value: "",
  currencies: [],
};

const Reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actions.STORE_VALUE:
      newState.value = action.payload;
      return newState;
    case actions.STORE_CURRENCIES:
      newState.currencies = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
