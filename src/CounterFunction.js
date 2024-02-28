import { useState } from 'react';

export const CounterFunction = ({ name, children, counter, increaseCounter }) => {
  if (!name) {
    name = 'default Name';
  }

  let [text, setText] = useState('');
  let [showInput, setShowInput] = useState(true);

  //   const handleInput = (event) => {
  //     console.log(event.target.value);
  //   };

  //   const handleInput = (event) => {
  //     console.log(event.target.value);
  //     setText(event.target.value);
  //   };


  return (
    <div>
      <p>CounterFunction</p>
      <p>{counter}</p>
      <p>{text}</p>
      {/* <p>{name}</p>
      <p>{children}</p> */}

      <button onClick={increaseCounter}>click</button>
      {/* <input type='text' onInput={(event) => handleInput(event)}></input> */}
      <button onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Скрыть' : 'Показать'}
      </button>
      {showInput && (
        <input
          type='text'
          onInput={(event) => setText(event.target.value)}
        ></input>
      )}
    </div>
  );
};
