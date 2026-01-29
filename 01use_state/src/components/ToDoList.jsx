import React, { useState } from "react";

export default function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  function addTodo() {
    if (!task.trim()) return;
    
    setTodo([...todo, task]);
    setTask("");
  }

  function handleDelete(index){
    const updatedTodo =
    todo.filter((_, i) => (
        i != index
    ));

    setTodo(updatedTodo);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add ToDo</button>
      </div>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
