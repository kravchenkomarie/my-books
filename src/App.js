import React, { useState, useRef } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';

// const lang = {
//   lang: 'RU',
// };

export const LangContext = React.createContext({});

function App() {
  let [counter, setCounter] = useState(0);

  const counterRef = useRef(null);

  const increaseCounter = () => {
    setCounter((counter += 1));
  };

  let [lang, setlang] = useState('RU');

  return (
    <div className='App'>
      <CounterClass name={'Max'}>
        Children props внутри тегов компонента
      </CounterClass>
      <LangContext.Provider value={{ lang, setLang }}>
        <CounterFunction
          ref={counterRef}
          name={'Maria'}
          counter={counter}
          increaseCounter={increaseCounter}
          setCounter={setCounter}
        >
          Hello Function!
        </CounterFunction>
      </LangContext.Provider>

      {/* <CounterFunction
        ref={counterRef}
        name={'Maria'}
        counter={counter}
        increaseCounter={increaseCounter}
        setCounter={setCounter}
      >
        Hello Function!
      </CounterFunction> */}
    </div>
  );
}

export default App;
