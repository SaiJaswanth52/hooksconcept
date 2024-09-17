import React, { useState } from 'react'

export default function UseStateArrays() {
    const[item,setItem] = useState([])
    const addItem = () => {
        setItem([...item,{
             value:Math.floor(Math.random() *10)+1
        }])

    }
  return (
    <div>
           <button onClick={addItem}>AddItem</button>
        <ul>
            { item.map( item => (<li key={item.id}>{item.value}</li>)) }
        </ul>

    </div>
  )
}
