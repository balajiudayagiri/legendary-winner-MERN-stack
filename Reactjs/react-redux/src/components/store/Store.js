import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const countReducer = (state = { fakeData: [] }, action) => {
  switch (action.type) {
    // case "inc":
    //   return {
    //     ...state,
    //     counter: state.counter + action.payload,
    //   };
    case "fakeData":
      return {
        fakeData: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer, composeWithDevTools);

export default store;
