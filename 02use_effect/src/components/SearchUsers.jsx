import React, { useEffect, useState } from 'react'

export default function SearchUsers() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then(res => res.json())
        .then(data => setResult(data));
    }, [query])

  return (
    <div>
        <input type="text" placeholder='Search...' onChange={e => setQuery(e.target.value)} />
        <br />

        <ul>
            {result.map((user) => (
                <li key={user.id}>{user.name} {user.email}</li>
            ))}
        </ul>
    </div>
  )
}
