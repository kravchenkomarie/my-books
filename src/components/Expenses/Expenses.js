import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import { getExpenses } from '../../data/expenses';
import { getCategory } from '../../data/categories';

export default function Expences() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortedExpenses, setSortedExpenses] = useState([]);
  const [sumExpenses, setSumExpenses] = useState();
  const [selectedSortOption, setSelectedSortOption] = useState('date');
  const [selectedCategorySortOption, setSelectedCategorySortOption] =
    useState('default');
  const [searchByComm, setSearchByComm] = useState('');

  const sortExpenses = (sortOption, expensesArray) => {
    let sortedExpenses = [...expensesArray];
    if (sortOption === 'toMax') {
      sortedExpenses.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'fromMin') {
      sortedExpenses.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'toMaxDate') {
      sortedExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === 'fromMinDate') {
      sortedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return sortedExpenses;
  };

  const handleDeleteExpense = (id) => {
    axios
      .delete(`http://localhost:3000/expenses/${id}`)
      .then(() => {
        const updatedExpenses = expenses.filter((el) => el.id !== id);
        setExpenses(updatedExpenses);
        setSortedExpenses(sortExpenses(selectedSortOption, updatedExpenses));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = () => {
    const filteredExpenses = expenses.filter((el) =>
      el.comment.toLowerCase().includes(searchByComm.toLowerCase())
    );
    setSortedExpenses(sortExpenses(selectedSortOption, filteredExpenses));
  };

  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res.data);
      if (selectedCategorySortOption !== 'default') {
        setSortedExpenses(
          sortExpenses(
            selectedSortOption,
            expenses.filter(
              (el) => el.categoryName === selectedCategorySortOption
            )
          )
        );
      } else {
        setSortedExpenses(sortExpenses(selectedSortOption, expenses));
      }
    });
  }, [selectedCategorySortOption]);

  useEffect(() => {
    if (selectedCategorySortOption !== 'default') {
      const filteredExpenses = expenses.filter(
        (el) => el.categoryName === selectedCategorySortOption
      );
      setSortedExpenses(sortExpenses(selectedSortOption, filteredExpenses));
    } else {
      setSortedExpenses(sortExpenses(selectedSortOption, expenses));
    }
  }, [selectedCategorySortOption, selectedSortOption, expenses]);

  useEffect(() => {
    getExpenses().then((res) => {
      setExpenses(res.data);

      if (selectedCategorySortOption !== 'default' && res.data.length > 0) {
        const filteredExpenses = res.data.filter(
          (el) => el.categoryName === selectedCategorySortOption
        );
        setSortedExpenses(sortExpenses(selectedSortOption, filteredExpenses));
      } else {
        setSortedExpenses(sortExpenses(selectedSortOption, res.data));
      }
    });
  }, [selectedSortOption]);

  useEffect(() => {
    const total = expenses.reduce(
      (acc, curr) => acc + parseFloat(curr.price),
      0
    );
    setSumExpenses(total);
  }, [expenses]);

  return (
    <div className={styles.expenses}>
      <div className={styles.sortBlock}>
        <div className={styles.sortByOptions}>
          Сортировать по:
          <select onChange={(e) => setSelectedSortOption(e.target.value)}>
            <option value='toMaxDate'>дате (возрастание)</option>
            <option value='fromMinDate'>дате (убывание)</option>
            <option value='toMax'>сумме (возрастание)</option>
            <option value='fromMin'>сумме (убывание)</option>
          </select>
        </div>
        <div className={styles.sortByCategory}>
          Сортировать по категории:
          <select
            onChange={(e) => setSelectedCategorySortOption(e.target.value)}
          >
            <option value='default'>Все категории</option>
            {category.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.search}>
          Поиск:
          <input
            type='text'
            placeholder='Поиск по комментарию'
            value={searchByComm}
            onChange={(e) => {
              setSearchByComm(e.target.value);
              handleSearch();
            }}
          />
        </div>
      </div>

      <div className={styles.sum}>Сумма расходов: {sumExpenses}</div>
      <div className={styles.cards}>
        {sortedExpenses.map((el) => (
          <div key={el.id} className={styles.card}>
            <button onClick={() => handleDeleteExpense(el.id)}>x</button>
            <p>Категория: {el.categoryName}</p>
            <p>Сумма: {el.price}</p>
            <p>Дата: {el.date}</p>
            <p>Комментрий: {el.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
