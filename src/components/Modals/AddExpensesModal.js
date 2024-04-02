import React, { useState } from 'react';
import { addExpense } from '../../data/expenses';

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
    <div>
      <div onClick={(e) => e.stopPropagation()}>
        <label>Сумма</label>
        <input
          type='number'
          name='sum'
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        ></input>
        <label>Дата</label>
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>Комментрий</label>
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button onClick={handleAddExpense}>Добавить расход</button>
      </div>
    </div>
  );
}
