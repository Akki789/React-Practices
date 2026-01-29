import React from 'react'

export default function RenderList() {
    const name= ["Akash", "Faizan", "Taha", "Vedant", "Saurabh"]
  return (
    <div>
        {name.map((l,i) => (
            <li key={l}>{l}</li>
        ))}
    </div>
  )
}
