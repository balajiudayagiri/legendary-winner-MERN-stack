import { set_Add_to_cart } from "../store/actions/actions";

const API_ORIGIN = "http://localhost:8080";
const token = localStorage.getItem("authenticationToken");

export const Authentication_loginIn_Register = (pathName, data) => {
  return fetch(`${API_ORIGIN}/${pathName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getProducts = () => {
  return fetch(`${API_ORIGIN}/products`);
};

export const fetch_cart_data_POST = (pathName, data) => {
  return fetch(`${API_ORIGIN}/${pathName}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const cart_item = () => {
  return (dispatch) => {
    fetch(`${API_ORIGIN}/getCartAndOrderList`, {
      method: "POST",
      headers: {
        authorization: `Barrer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("add_to_cart_DATA", JSON.stringify(res.cart.cart));
        dispatch(set_Add_to_cart(res.cart.cart));
      });
  };
};
