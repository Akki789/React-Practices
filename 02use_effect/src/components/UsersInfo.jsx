import React, { useEffect, useState } from 'react'

export default function UsersInfo() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
  return (
    <div>
        <ul>
            {users.map((u) => (
                <li key={u.id}>{u.name}</li>
            ))}
        </ul>
    </div>
  )
}
