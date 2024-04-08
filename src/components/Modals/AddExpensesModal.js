import React, { useState } from 'react';
import { addExpense } from '../../data/expenses';
import styles from './styles.module.scss';

export default function AddExpensesModal({
  selectedCategoryName,
  openExpensesModal,
}) {
  const [sum, setSum] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleAddExpense = () => {
    addExpense(sum, date, comment, selectedCategoryName, setComment);
    openExpensesModal();
  };

  return (
    <div
      onClick={() => {
        openExpensesModal(false);
      }}
      className={styles.expensesModal}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.buttonBlock}>
          <button onClick={() => openExpensesModal(false)}>x</button>
        </div>
        <p className={styles.titleExpenses}>Сумма</p>
        <input
          type='number'
          name='sum'
          value={sum}
          onChange={(e) => setSum(e.target.value)}
          className={styles.fileInputExpenses}
        ></input>
        <br />
        <p className={styles.titleExpenses}>Дата</p>
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.fileInputExpenses}
        ></input>
        <br />

        <p className={styles.titleExpenses}>Комментрий</p>
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.fileInputExpenses}
        ></input>
        <br />
        <button
          onClick={handleAddExpense}
          className={styles.modalButtonExpenses}
        >
          Добавить расход
        </button>
      </div>
    </div>
  );
}
