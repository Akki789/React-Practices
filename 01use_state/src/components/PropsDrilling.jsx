import React from 'react'

export default function PropsDrilling() {
  return (
    <div>
        <Person1 user={{name:"Akash", age:22, place:"Pune"}} />
    </div>
  )
}

function Person1({user}){
    return(
        <Person2 user={user} />
    )
}

function Person2({user}){
    return(
        <Card>
            <p>{user.name}</p>
        </Card>
    )
}

function Card({children}){
    return <h2>{children}</h2>
}