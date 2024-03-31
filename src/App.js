import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Error from './components/Error/Error';
import ProductPage from './components/Products/ProductPage';
import Categories from './components/Categories/Categories';
import Expenses from './components/Expenses/Expenses';

export const ModalContext = React.createContext();

function App() {
  // const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  // const [isExpensesModalOpen, setIsExpensesModalOpen] = useState(false);

  // const openCategoryModal = () => {
  //   setIsCategoryModalOpen((prev) => !prev);
  // };

  // const openExpensesModal = () => {
  //   setIsExpensesModalOpen((prev) => !prev);
  // };

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <ModalContext.Provider
          value={{
            openCategoryModal,
            openExpensesModal,
            isCategoryModalOpen,
            isExpensesModalOpen,
          }}
        > */}
        <Routes>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/expenses' element={<Expenses />}>
            Расходы
          </Route>
          <Route path='about' element={<About />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
        </Routes>
        {/* </ModalContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
