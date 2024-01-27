import React from 'react'
import { useState, useEffect } from 'react'
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        //store the state mode to the local storage
        setDark(isDark)
    }, [dark])
    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
