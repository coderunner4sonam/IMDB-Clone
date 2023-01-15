import React, { useState } from 'react'
import { createContext } from 'react'
export const globalState= createContext()

function Context({children}) {
    const [query,setQuery]=useState("")
    const [count,setCount]=useState(0);
    const [movies, setMovies]=useState([]);
    const [text,setText]=useState("");
    
  return (
   <globalState.Provider value={{query,setQuery,count,setCount,movies, setMovies,text,setText}}>
        {children}
   </globalState.Provider>
  )
}
    
export default Context


