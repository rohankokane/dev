import { useEffect, useRef, useState } from 'react'
import './App.css'

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleToggle = () => {
    if (isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <>
      <div className="card">
          counter: {counter}
      </div>
      <p className="button-container">
       <button onClick={handleToggle}>
          {!isRunning ? 'Start' : 'Pause'}
        </button>
       <button onClick={handleReset}>
          Reset
        </button>
      </p>
    </>
  )
}

export default Counter;
