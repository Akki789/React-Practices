import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
  return (
    <div>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}
