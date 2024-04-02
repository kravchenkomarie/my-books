import axios from 'axios';

const categoryUrl = `http://localhost:3000/category`;

export const getCategory = async () => {
  const response = await axios.get(categoryUrl);
  return response;
};

export const addCategory = async (name, src, setText) => {
  const response = await axios.post(categoryUrl, {
    name: name,
    imgUrl: src,
  });
  return response;
};
