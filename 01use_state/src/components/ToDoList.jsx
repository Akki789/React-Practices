import React, { useState } from 'react'

export default function ToDoList() {
    const[todo, setTodo] = useState([]);
    const[task, setTask] = useState("");


    function addTodo(){
        setTodo([...todo, task])
        setTask("")
    }
  return (
    <div>
        <input type="text" placeholder='Add todo...' onChange={e => setTask(e.target.value)} />
        <button onClick={addTodo}>Add ToDo</button>

       {
        todo.map((l,i) => (
            <ul>
                <li key={i}>{l}</li>
            </ul>
        ))
       }
    </div>
  )
}
