import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function PreviousValue() {
    const [count, setCount] = useState(0);
    let previousCount = useRef(count);

    function handleClick(){
      setCount(prev => {
        previousCount.current = prev;
        console.log("Previous value : ",previousCount.current);
        return prev +1;
      });
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increase Count</button>
    </div>
  )
}
