import { useState, useRef, useEffect, forwardRef, useContext } from 'react';
import Language from './Language';

export const CounterFunction = forwardRef(
  ({ name, children, counter, increaseCounter, setCounter }) => {
    if (!name) {
      name = 'default Name';
    }
    const timerId = useRef(0);
    let [text, setText] = useState('');
    let [showInput, setShowInput] = useState(true);

    //   const handleInput = (event) => {
    //     console.log(event.target.value);
    //   };

    //   const handleInput = (event) => {
    //     console.log(event.target.value);
    //     setText(event.target.value);
    //   };

    useEffect(() => {
      const id = setInterval(() => setCounter((counter += 1)), 1000);
      timerId.current = id; // использовать либюо внутри useEffect, либо внутри каких-то функций, а не во время рендеринга (в коде без функции)
      console.log(timerId.current);
      return () => {};
    }, []);

    let MyContext;
    const inputRef = useRef(null);
    // const value = useContext(MyContext);

    const handleClick = () => {
      console.log(inputRef.current);
      console.log(inputRef.current.value);
    };

    return (
      <div>
        <p>CounterFunction</p>
        <p>{counter}</p>
        <p>{text}</p>
        {/* <p>{name}</p>
      <p>{children}</p> */}

        <button onClick={increaseCounter}>Запустить счетчик</button>
        <button onClick={() => clearInterval(timerId.current)}>
          Остановить счетчик
        </button>

        <input type='text' ref={inputRef}></input>
        <button onClick={handleClick}>Показать ref</button>
        <Language />
        {/* <input type='text' onInput={(event) => handleInput(event)}></input> */}
        {/* <button onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Скрыть' : 'Показать'}
      </button>
      {showInput && (
        <input
          
          type='text'
          onInput={(event) => setText(event.target.value)}
        ></input>
      )} */}
      </div>
    );
  }
);
