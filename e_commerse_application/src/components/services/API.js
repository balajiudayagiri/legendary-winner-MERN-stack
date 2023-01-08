const API_ORIGIN = "http://localhost:8080";

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
