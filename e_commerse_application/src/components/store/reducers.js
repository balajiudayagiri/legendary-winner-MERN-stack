import { fetchFromDummyjson } from "./FetchData";

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

export const fetchAction = (data) => {
  return {
    type: "fetch_get",
    payload: data,
  };
};
fetchAction(fetchFromDummyjson());
