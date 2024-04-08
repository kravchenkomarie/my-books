import React, { useState } from 'react';
import { addCategory } from '../../data/categories';
import styles from './styles.module.scss';

export default function AddCategoryModal({
  handleInputChange,
  openCategoryModal,
  text,
}) {
  const [url, setUrl] = useState();
  const isDisable = text.trim() == '';

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUrl(imageUrl);
    }
  };

  return (
    <div
      onClick={() => {
        openCategoryModal(false);
      }}
      className={styles.categoryModal}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.buttonBlock}>
          <button onClick={() => openCategoryModal(false)}>x</button>
        </div>
        <p className={styles.title}>Название категории</p>

        <input
          onChange={handleInputChange}
          value={text}
          type='text'
          name='text'
          className={styles.fileInput}
        ></input>

        <input onChange={handleFileChange} type='file'></input>

        <button
          disabled={isDisable}
          onClick={() => {
            addCategory(text, url);
            openCategoryModal();
          }}
          className={styles.modalButton}
        >
          Добавить категорию
        </button>
      </div>
    </div>
  );
}
