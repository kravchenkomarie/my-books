import React from 'react';
import styles from './styles.module.scss';

export default function BookDetailsModal({ bookDetails, openModal }) {
  return (
    <div
      onClick={() => {
        openModal(false);
      }}
      className={styles.bookModal}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.buttonBlock}>
          <button
            onClick={() => openModal(false)}
            className={styles.modalButton}
          >
            x
          </button>
        </div>
        {bookDetails?.title}
      </div>
    </div>
  );
}
