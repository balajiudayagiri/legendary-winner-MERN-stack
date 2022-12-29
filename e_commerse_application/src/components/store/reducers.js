const initalState = {
  fetchedData: [],
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "fetch_get":
      return {
        fetchedData: action.payload,
      };
    default:
      return state;
  }
};
