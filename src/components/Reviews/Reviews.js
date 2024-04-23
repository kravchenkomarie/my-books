import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBooksDetails } from '../../data/books';

export default function Reviews() {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    getBooksDetails(id)
      .then((res) => {
        setSelectedBook(res.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  console.log(selectedBook);

  if (!selectedBook) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <h3>{selectedBook.title}</h3>
        <img src={selectedBook.image} alt='book cover' />
      </div>
      <div>
        <p>Оставить оценку</p>
        <p>Оставить отзыв</p>
        <input placeholder='Напишите ваш отзыв о данной книге' />
        <p>Запишите любимые цитаты</p>
        <input placeholder='Цитаты' />
        <button>Сохранить</button>
      </div>
    </div>
  );
}
