import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Home() {
    const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <div style={{
        background : theme === "light" ? "white" : "black",

        color : theme === "light" ? "black" : "white",

        height : "100vh",

        padding : "20px"
    }}>
        <h1>Current theme :{theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
