import React, { useEffect } from 'react'

export default function RunTwoEffects() {
  useEffect(() => {
    console.log("Rendered happened");
  })

  useEffect(() => {
    console.log("Mounted");
  }, [])
    
  return (
    <div>
        <h1>Effects Demo</h1>
    </div>
  )
}
