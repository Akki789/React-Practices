import React, { useState } from 'react'

export default function ShowHideText() {
   const [show, setShow] = useState(true);

   function handleShow(){
    setShow(!show)
   }
  return (
    <div>
        {
            show && (<p>Hello text is visible</p>) 
        }
        <button onClick={handleShow}>{show ? ("Hide"):("Show")}</button>
    </div>
  )
}
