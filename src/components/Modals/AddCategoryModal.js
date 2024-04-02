import React, { useState } from 'react';
import { addCategory } from '../../data/categories';

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
    <div onClick={(e) => e.stopPropagation()}>
      <label>Название категории</label>
      <input
        onChange={handleInputChange}
        value={text}
        type='text'
        name='text'
      ></input>

      <input onChange={handleFileChange} type='file'></input>
      <img src={url} alt='' />

      <button
        disabled={isDisable}
        onClick={() => {
          addCategory(text, url);
          openCategoryModal();
        }}
      >
        Добавить категорию
      </button>
    </div>
  );
}
