import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import { getExpenses } from '../../data/expenses';

export default function Expences() {
  const [expenses, setExpenses] = useState([]);
  const [sumExpenses, setSumExpenses] = useState();

  useEffect(() => {
    getExpenses().then((res) => {
      setExpenses(res.data);
    });
  }, []);

  useEffect(() => {
    let total = 0;
    expenses.forEach((el) => {
      total += Number(el.price);
    });
    setSumExpenses(total);
  }, [expenses]);

  const handleDeleteExpense = (id) => {
    axios
      .delete(`http://localhost:3000/expenses/${id}`)
      .then(() => {
        const updatedExpenses = expenses.filter((el) => el.id !== id);
        setExpenses(updatedExpenses);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.expenses}>
      <div>Фильтры</div>
      <div className={styles.title}>Расходы</div>
      <div>Сумма расходов: {sumExpenses}</div>
      {expenses.map((el) => (
        <div key={el.id} className={styles.card}>
          <button onClick={() => handleDeleteExpense(el.id)}>x</button>
          <p>Категория: {el.categoryName}</p>
          <p>Сумма: {el.price}</p>
          <p>Дата: {el.date}</p>
          <p>Комментрий: {el.comment}</p>
        </div>
      ))}
    </div>
  );
}
