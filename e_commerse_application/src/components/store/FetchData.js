export const fetchFromDummyjson = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
