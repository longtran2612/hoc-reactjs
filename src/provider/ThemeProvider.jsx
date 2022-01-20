import { createContext, useState, useContext } from "react"
const themeContext = createContext()

function ThemeProvider({children}){

const [theme,setTheme]= useState('dark')

const handleTheme=()=>{
  setTheme(theme ==='light'?'dark':'light')
}
const value={
  theme,
  handleTheme
}

   
    return(
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
    

}
export {themeContext,ThemeProvider}