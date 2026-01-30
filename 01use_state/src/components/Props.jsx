import React from 'react'

export default function Props() {
  return (
    <div>
        <Child name="Akash" />
        <Child2 message={"Hiii React"} />
    </div>
  )
}

function Child({name}){
   return <p>{name}</p>
}

function Child2({message}){
    return <p>{message}</p>
}