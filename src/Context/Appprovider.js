import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const Studentctx = createContext(null)

function Appprovider({children}) {
const [students, setStudents] = useState([])
useEffect(()=>{
  const getStudents = async () => {
      const response = await fetch("https://644e0cb61b4567f4d57eddcf.mockapi.io/users", {
        method : "GET",
      })
      const data = await response.json()
      if (data){
        setStudents(data)
      }
  }
  getStudents()
},[])

  return (
    <Studentctx.Provider
    value={{students, setStudents}}
    >
     {children}
    </Studentctx.Provider>
    
  )
}


export const Appstates = () =>{
    return useContext(Studentctx)
}
export default Appprovider