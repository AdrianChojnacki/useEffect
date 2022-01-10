import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handler = () => setCounter(prevValue => prevValue + 1);

  return (
    <div onClick={handler}>
      <p>Licznik</p>
      <p>{counter}</p>
    </div>
  );
}

export default App;
