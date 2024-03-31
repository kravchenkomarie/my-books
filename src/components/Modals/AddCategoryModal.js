import React, { useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../App';
import { addCategory } from '../../data/categories';

export default function AddCategoryModal() {
  const modalContext = useContext(ModalContext);
  const [url, setUrl] = useState();
  const isDisable = modalContext.text.trim() == '';

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
        onChange={modalContext.handleInputChange}
        value={modalContext.text}
        type='text'
        name='text'
      ></input>

      <input onChange={handleFileChange} type='file'></input>
      <img src={url} alt='' />

      <button
        disabled={isDisable}
        onClick={() => {
          addCategory(modalContext.text, url);
          modalContext.openModal();
        }}
      >
        Добавить категорию
      </button>
    </div>
  );
}
