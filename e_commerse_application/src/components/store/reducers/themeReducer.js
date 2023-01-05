export const themeReducer = (state = { theme: false }, action) => {
  switch (action.type) {
    case "themeType":
      return {
        theme: action.payload,
      };
  }
};
