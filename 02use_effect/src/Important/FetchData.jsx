import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//fetch data from API and display using useEffect

export default function FetchData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
      
  }, []);

  return (
    <div>
      <ul>
        {user.map((u) => (
            <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
