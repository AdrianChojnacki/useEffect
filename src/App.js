import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(prevValue => prevValue + 1);
  const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue);

  // useEffect(() => {
  //   alert('Hello')
  // }, []);

  return (
    <div>
      <button onClick={toggleVisibilityCounter}>
        Pokaż/ukryj komponent
      </button>
      {isActive && <Counter />}
    </div>
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = event => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <p>{counter}</p>
      {/* <p>{rerenderCounter}</p> */}
    </div>
  )
}

export default App;
