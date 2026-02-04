import React, { useEffect, useState } from "react";

export default function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
