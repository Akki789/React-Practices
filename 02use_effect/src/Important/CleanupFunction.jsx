import React, { useEffect, useRef, useState } from "react";

export default function CleanupFunction() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    console.log(intervalRef);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () =>{
    setTimer(0);
    intervalRef.current = null;
  }


  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
