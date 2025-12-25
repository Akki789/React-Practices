import React, { useState } from 'react'

export default function ClickCounter() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleCIncrease(){
        setCount(count + Number(step));
    }
  return (
    <div>
        <input type="number" placeholder='enter num' value={step} onChange={(e) => setStep(e.target.value)} />

        <p>{count}</p>
        
        <button onClick={handleCIncrease}>Increase by step</button>
    </div>
  )
}
