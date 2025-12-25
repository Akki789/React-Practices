import React, { useState } from 'react'

export default function FruitList() {
    const [fruit, setFruit] = useState([]);
    const [input, setInput] = useState("");

    function addFruit(){
        let trimmed = input.trim();
        if (!trimmed) return ;
        setFruit(prev => [...prev, trimmed]);
        setInput("")
    }

    function removeFruit(){
        setFruit(prev => prev.slice(0, -1))
    }

    
  return (
    <div>
        <input type="text" value={input} placeholder='Enter Fruit name' onChange={(e) => setInput(e.target.value)} />

        
        <button onClick={addFruit}>Add Fruit</button>
        <button onClick={removeFruit}>Remove Last Fruit</button>

        <ul>
            {fruit.map((f,i) =>
               (
                    <li key={i}>{f}</li>
                )
            )}
        </ul>
    </div>
  )
}
