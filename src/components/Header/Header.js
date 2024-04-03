import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header() {
  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className={styles.header}>
      <Link className={styles.headerLink} to='/expenses'>
        Расходы
      </Link>
      <Link className={styles.headerLink} to='/categories'>
        Добавить расходы
      </Link>
      <Link className={styles.headerLink} to='/about'>
        О нас
      </Link>
    </div>
  );
}
