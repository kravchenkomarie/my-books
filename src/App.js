import { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';

function App() {
  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((counter += 1));
  };

  return (
    <div className='App'>
      <CounterClass name={'Max'}>
        Children props внутри тегов компонента
      </CounterClass>
      <CounterFunction name={'Maria'} counter={counter} increaseCounter={increaseCounter}>
        Hello Function!
      </CounterFunction>
    </div>
  );
}

export default App;
