import { createStore } from "redux";
const countReducer = (state, action) => {
  switch (action.type) {
    case "count":
      return {
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};
const store = createStore(countReducer, { counter: 0 });
export default store;
