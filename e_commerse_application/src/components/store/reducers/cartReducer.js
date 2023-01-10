export const add_to_cart_Reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "CART_DATA":
      return {
        cart: action.payload,
      };

    default:
      return state;
  }
};
