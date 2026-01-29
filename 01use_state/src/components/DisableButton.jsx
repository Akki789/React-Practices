import React, { useState } from 'react'

export default function DisableButton() {
    const[disabled, setDisabled] = useState(false)

    function handleDisabled(){
        setDisabled(true)
    }
  return (
    <div>
        <button disabled={disabled} onClick={handleDisabled}>Click me!</button>
    </div>
  )
}
