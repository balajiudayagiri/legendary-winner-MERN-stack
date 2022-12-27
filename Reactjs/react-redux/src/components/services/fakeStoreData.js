export const fetchDatafromFakeStore = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};
