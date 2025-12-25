import React, { useState } from 'react'

export default function DoubleTriple() {
    const [count, setCount] = useState(0);

    function handleDouble(){
        setCount(prev => prev*2);
    }

    function handleTripple(){
        setCount(prev => prev*3);
    }
  return (
    <div>
        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={handleDouble}>Double</button>
        <button onClick={handleTripple}>Tripple</button>
    </div>
  )
}
