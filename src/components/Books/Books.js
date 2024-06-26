import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, getBooksDetails } from '../../data/books';
import BookDetailsModal from '../Modals/BookDetailsModal';
import styles from './styles.module.scss';

export default function Books({ toggleFavorite, favoriteBooks }) {
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getBooks().then((res) => {
      setBooks(res.books);
    });
  }, []);

  const handleBookClick = (id) => {
    if (!id) {
      setOpenModal(true);
    }

    getBooksDetails(id)
      .then((res) => {
        setBookDetails(res.data);
        setOpenModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.books}>
      {books.map((el) => (
        <div
          key={el.id}
          className={styles.book}
          onClick={() => handleBookClick(el.id)}
        >
          <img src={el.image} alt='book' className={styles.image} />
          <h3>{el.title}</h3>
          <p>{el.authors}</p>
          <p>{el.subtitle}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(el);
            }}
          >
            {favoriteBooks.some((favBook) => favBook.id === el.id)
              ? 'Удалить из избранного'
              : 'Добавить в избранное'}
          </button>

          <Link to={`book/${el.id}`}>Оценить</Link>

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            хочу прочитать
          </button>
        </div>
      ))}

      {openModal && (
        <BookDetailsModal bookDetails={bookDetails} openModal={setOpenModal} />
      )}
    </div>
  );
}
