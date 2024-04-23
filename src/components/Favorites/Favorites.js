import React from 'react';
import styles from './styles.module.scss';

export default function Favorites({
  favoriteBooks,
  handleBookClick,
  removeFromFavorite,
}) {
  return (
    <div>
      {favoriteBooks?.map((el) => {
        return (
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
                removeFromFavorite(el);
              }}
            >
              удалить из избранного
            </button>
          </div>
        );
      })}
    </div>
  );
}
