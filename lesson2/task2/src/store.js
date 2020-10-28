import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const RESET = "COUNTER/RESET";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const initialState = {
  history: [],
};

const counterReducer = (state = initialState, action) => {
  const { value, history } = state;
  switch (action.type) {
    case INCREMENT:
      return {
        value: value + 1,
        history: [...history, "+1"],
      };

    case DECREMENT:
      return {
        ...state,
        value: value - 1,
        history: [...history, -1],
      };
    case RESET:
      return {
        ...state,
        value: 0,
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;