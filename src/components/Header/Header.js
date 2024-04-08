import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header() {
  const location = useLocation;
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.header}>
      <Link
        className={`${styles.headerLink} ${
          activeTab === '/' ? styles.active : ''
        }`}
        to='/'
        onClick={() => handleTabClick('/')}
      >
        Расходы
      </Link>
      <Link
        className={`${styles.headerLink} ${
          activeTab === '/categories' ? styles.active : ''
        }`}
        to='/categories'
        onClick={() => handleTabClick('/categories')}
      >
        Добавить расходы
      </Link>
      <Link
        className={`${styles.headerLink} ${
          activeTab === '/about' ? styles.active : ''
        }`}
        to='/about'
        onClick={() => handleTabClick('/about')}
      >
        О нас
      </Link>
    </div>
  );
}
