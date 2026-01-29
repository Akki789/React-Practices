import React, { useState } from "react";

export default function ChangeButtonColor() {
  const [color, setColor] = useState("green");

  function handleColor() {
    setColor(color=="red"? "green": "red");
  }
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={handleColor}
      >
        Click Me
      </button>
    </div>
  );
}
