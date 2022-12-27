export const counterData = (data) => {
  return {
    type: "inc",
    payload: data,
  };
};

export const setFakeStoreData = (fetchedData) => {
  return {
    type: "fakeData",
    payload: fetchedData,
  };
};
