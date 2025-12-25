import React, { useState } from 'react'

export default function ToggleText() {

    const [text, setText] = useState("Hello Student!");


  return (
    <div>
        <p>{text}</p>
        <button onClick={() => setText("Welcome to React!")}>Toggle Text</button>
    </div>
  )
}
