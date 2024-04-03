import React, { useState, useEffect } from 'react';
import { getCategory } from '../../data/categories';
import AddCategoryModal from '../Modals/AddCategoryModal';
import styles from './styles.module.scss';
import AddExpensesModal from '../Modals/AddExpensesModal';
import { PlusIcon } from './PlusIcon';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isExpensesModalOpen, setIsExpensesModalOpen] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');
  const [text, setText] = useState('');
  const [comment, setComment] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  const openCategoryModal = () => {
    setIsCategoryModalOpen((prev) => !prev);
  };

  const openExpensesModal = (categoryName) => {
    setIsExpensesModalOpen((prev) => !prev);
    setSelectedCategoryName(categoryName);
  };

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  }, [categories]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sum') {
      setSum(value);
    }
    if (name === 'date') {
      setDate(value);
    }
    if (name === 'text') {
      setText(value);
    }
    if (name === 'comment') {
      setComment(value);
    }
  };

  return (
    <>
      <div className={styles.categories}>
        {categories.map((el) => (
          <div
            key={el.id}
            onClick={() => openExpensesModal(el.name)}
            className={styles.card}
          >
            <p>{el.name}</p>
            <img className={styles.image} src={el.imgUrl} alt='category name' />
          </div>
        ))}

        {isExpensesModalOpen && (
          <AddExpensesModal
            selectedCategoryName={selectedCategoryName}
            openExpensesModal={openExpensesModal}
          />
        )}
        {isCategoryModalOpen && (
          <AddCategoryModal
            handleInputChange={handleInputChange}
            openCategoryModal={openCategoryModal}
            text={text}
          />
        )}

        {!isCategoryModalOpen && (
          <button className={styles.button} onClick={openCategoryModal}>
            <PlusIcon />
            Добавить категорию
          </button>
        )}
      </div>
    </>
  );
}
