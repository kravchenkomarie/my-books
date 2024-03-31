import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { ModalContext } from '../../App';
import { getExpenses } from '../../data/expenses';

export default function Expences() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then((res) => {
      setExpenses(res.data);
    });
  }, []);
  return (
    <ModalContext.Provider value={{}}>
      <div>Фильтры</div>
      <div className={styles.title}>Расходы</div>
      {expenses.map((el) => (
        <div key={el.id} className={styles.card}>
          <p>Категория: {el.categoryId}</p>
          <p>Сумма: {el.price}</p>
          <p>Дата: {el.date}</p>
          <p>Комментрий: {el.comment}</p>
        </div>
      ))}
    </ModalContext.Provider>
  );
}
