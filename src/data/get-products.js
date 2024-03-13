import axios from 'axios';

const url = `https://dummyjson.com/products?limit=10`;

export const getProducts = async () => {
  const response = await axios.get(url);
  return response;
};
