import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function AutoFocus() {
    const [name, setName] = useState("");
    let input = useRef();

    useEffect(() => {
        input.current.focus();
    }, []);

  return (
    <div>
        <input type="text" ref={input} placeholder='Enter name ...' onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
