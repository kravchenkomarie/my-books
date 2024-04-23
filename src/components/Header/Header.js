import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../App';
import styles from './styles.module.scss';

export default function Header() {
  const { switchTheme } = useContext(ThemeContext);

  const location = useLocation;
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <button onClick={switchTheme}>Switch Theme</button>

      <div className={styles.header}>
        <Link
          className={`${styles.headerLink} ${
            activeTab === '/' ? styles.active : ''
          }`}
          to='/'
          onClick={() => handleTabClick('/')}
        >
          Книги
        </Link>
        <Link
          className={`${styles.headerLink} ${
            activeTab === '/favorites' ? styles.active : ''
          }`}
          to='/favorites'
          onClick={() => handleTabClick('/')}
        >
          Избранное
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
    </div>
  );
}
