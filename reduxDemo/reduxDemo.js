const redux = require("redux");
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
const store = redux.createStore(countReducer, { counter: 0 });

store.subscribe(() => {
  const latestState = store.getState();
  console.log(latestState);
});

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
