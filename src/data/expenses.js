import axios from 'axios';

const expensesUrl = `http://localhost:3000/expenses`;

export const getExpenses = async () => {
  const response = await axios.get(expensesUrl);
  return response;
};

export const addExpense = async (
  price,
  date,
  comment,
  selectedCategoryName,
) => {
  const response = await axios.post('http://localhost:3000/expenses', {
    price: price,
    date: date,
    categoryId: selectedCategoryName,
    comment: comment,
  });
  return response;
};
