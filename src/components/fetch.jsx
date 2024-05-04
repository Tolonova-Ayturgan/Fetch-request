import React, { useEffect, useState } from 'react'

const FetchUsers = () => {

    const [state, setState] = useState([])
    console.log(state);

    
    const jsonGetUsers = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await res.json()
        setState(result)
    }
    useEffect(() =>{
        jsonGetUsers();  
    }, [])


return (
    <div>
      {state.map((el) =>{
        return(
            <div key={el.id}>
               <h1>{el.name}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default FetchUsers
