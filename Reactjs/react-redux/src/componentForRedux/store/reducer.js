const initalStateValue = {
  fakeData: [],
};
export const reducer = (state = initalStateValue, action) => {
  switch (action.type) {
    case "fetch_get":
      return {
        fakeData: action.payload,
      };
    default:
      return state;
  }
};
