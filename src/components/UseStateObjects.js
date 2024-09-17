import React, { useState } from 'react'

export default function UseStateObjects() {
    const[name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
            
        <form > 
        
            <input type="text" value={name.firstName} 
            onChange={(e) => setName({...name, firstName:e.target.value})}>
            </input>

            <input type="text" value={name.lastName}
            onChange={(e) => setName({...name, lastName:e.target.value})}>
           </input>

           <h3>FirstName is {name.firstName}</h3> 
            <h3>Last Name is {name.lastName}</h3>

        </form>
      
    </div>
  )
}
