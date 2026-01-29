import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(prev => prev+1)
    }

    function handleDecrement(){
        setCount(prev => prev-1)
    }

    function reset(){
        setCount(0)
    }

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
