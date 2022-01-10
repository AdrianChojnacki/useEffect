import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(prevValue => prevValue + 1);
  const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue);

  const counterComponent = isActive
    ? <Counter rerenderCounter={counter} />
    : null;

  useEffect(() => {
    alert('Hello');
  }, []);

  return (
    <div>
      <button onClick={toggleVisibilityCounter}>
        Pokaż/ukryj komponent
      </button>
      <button onClick={handler}>
        Przerenderuj komponent
      </button>
      {counterComponent}
    </div>
  );
}

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = event => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      alert('Komponent jest odmontowywany');
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  )
}

export default App;
