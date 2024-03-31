import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <Link to='/expenses'>Статистика</Link>
      <Link to='/categories'>Расходы</Link>
      <Link>Доходы</Link>
      {/* <Link to='/categories'>Категории</Link> */}
      <Link to='/about'>О нас</Link>
      {/* <button onClick={() => navigate('/')}>Главная</button>
      <button onClick={() => navigate(-1)}>Назад</button> */}
    </div>
  );
}
