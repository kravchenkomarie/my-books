import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <div>Фильтры</div>
      <div className={styles.title}>Расходы</div>
      <div>Сумма расходов: {sumExpenses}</div>
      {expenses.map((el) => (
        <div key={el.id} className={styles.card}>
          <p>Категория: {el.categoryId}</p>
          <p>Сумма: {el.price}</p>
          <p>Дата: {el.date}</p>
          <p>Комментрий: {el.comment}</p>
        </div>
      ))}
    </div>
  );
}
