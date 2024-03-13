import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import About from './components/About/About';
import Error from './components/Error/Error';
import ProductPage from './components/Products/ProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
