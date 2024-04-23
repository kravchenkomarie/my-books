import axios from 'axios';

export const getBooks = async () => {
  const response = await axios.get('https://www.dbooks.org/api/recent');
  return response.data;
};

export const getBooksDetails = async (id) => {
  const response = await axios.get(`https://www.dbooks.org/api/book/${id}`);
  return response;
};

// export const getBooks = async () => {
//   const response = await axios.get(
//     'https://openlibrary.org/api/books?bibkeys=ISBN:1931498717&jscmd=details&format=json'
//   );
//   return response;
// };

// export const addCategory = async (name, src, setText) => {
//   const response = await axios.post(categoryUrl, {
//     name: name,
//     imgUrl: src,
//   });
//   return response;
// };
