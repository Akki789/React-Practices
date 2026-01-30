import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${search}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search name ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>{user.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}</ul>
    </div>
  );
}
