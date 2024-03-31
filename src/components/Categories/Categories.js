import React, { useState, useContext, useEffect } from 'react';
import { getCategory } from '../../data/categories';
import AddCategoryModal from '../Modals/AddCategoryModal';
import { ModalContext } from '../../App';
import styles from './styles.module.scss';
import AddExpensesModal from '../Modals/AddExpensesModal';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');
  const [text, setText] = useState('');
  const [comment, setComment] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  }, []);

  // const addExpenses = (categoryName) => {
  //   setSelectedCategoryName(categoryName);
  //   setExpenses((prev) => !prev);
  // }

  const handleAddExpenses = (categoryName) => {
    setSelectedCategoryName(categoryName);
    setExpenses(true);
  };

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
    <ModalContext.Provider
      value={{
        // addExpenses,
        handleInputChange,
        date,
        sum,
        text,
        openModal,
        comment,
        selectedCategoryName,
        // categoryName,
        // setComment,
      }}
    >
      <div>Выберите категорию</div>
      <div>
        {categories.map((el) => (
          <div
            key={el.id}
            onClick={() => handleAddExpenses(el.name)}
            className={styles.card}
          >
            <p>{el.name}</p>
            <img className={styles.image} src={el.imgUrl} alt='category name' />
          </div>
        ))}

        {expenses && (
          <AddExpensesModal selectedCategoryName={selectedCategoryName} />
        )}
        {isModalOpen && <AddCategoryModal />}

        {!isModalOpen && (
          <button onClick={openModal}>Добавить категорию</button>
        )}
      </div>
    </ModalContext.Provider>
  );
}
