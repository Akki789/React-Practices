import { useCallback, useMemo, useState } from "react";

const Child = React.memo(({ onAdd }) => {
  console.log("Child rendered");
  return <button onClick={onAdd}>Add</button>;
});

export default function Example2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

//   const add = () => setCount(count + 1); //given

  const add= useCallback(() => {
    return setCount(prev => prev  +1)
  }, [])

//   const total = count * 2;// given

  const total = useMemo(() => {
    return count *2;
  }, [count])

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>{total}</p>
      <Child onAdd={add} />
    </>
  );
}
