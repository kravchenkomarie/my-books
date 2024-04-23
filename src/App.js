import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Error from './components/Error/Error';
import Books from './components/Books/Books';
import Favorites from './components/Favorites/Favorites';
import { getBooksDetails } from './data/books';
import Reviews from './components/Reviews/Reviews';

const themes = {
  light: {
    background: '#ffffff',
    color: '#0a1756',
    fontStyle: 'normal',
  },
  dark: {
    background: '#0a1756',
    color: '#ffffff',
    fontStyle: 'italic',
  },
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.light);
  const switchTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  const [favoriteBooks, setFavoriteBooks] = React.useState([]);
  const [bookDetails, setBookDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const addToFavorite = (book) => {
    setFavoriteBooks((prevBooks) => [...prevBooks, book]);
  };

  const removeFromFavorite = (book) => {
    setFavoriteBooks((prevBooks) =>
      prevBooks.filter((favBook) => favBook.id !== book.id)
    );
  };

  const toggleFavorite = (book) => {
    const isFavorite = favoriteBooks.some((favBook) => favBook.id === book.id);

    if (isFavorite) {
      removeFromFavorite(book);
    } else {
      addToFavorite(book);
    }
  };

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
    <ThemeContext.Provider value={{ theme, themes, setTheme, switchTheme }}>
      <BrowserRouter>
        <div
          style={{
            background: theme.background,
            color: theme.color,
            fontStyle: theme.fontStyle,
          }}
        >
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Books favoriteBooks={favoriteBooks} toggleFavorite={toggleFavorite} />}
            ></Route>
            <Route
              path='/favorites'
              element={
                <Favorites
                  favoriteBooks={favoriteBooks}
                  handleBookClick={handleBookClick}
                  bookDetails={bookDetails}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  removeFromFavorite={removeFromFavorite}
                />
              }
            ></Route>
            <Route path='/book/:id' element={<Reviews />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='/error' element={<Error />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
