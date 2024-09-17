import React, { useState } from 'react'
import useForm from './UseForm'

export default function FormEx() {
    const[FirstName,bindFN,resetFirstName] = useForm('')
    const[LastName,bindLN,resetLastName] = useForm('')
  
    const Submit = () =>{
      alert(`FirstName ${FirstName} LastName ${LastName}`)
      resetFirstName()
      resetLastName()
    }

  return (
    <form onSubmit={Submit}>
    <div>
        FirstName: <input {...bindFN} type="text" ></input> <br/>
        LastName: <input {...bindLN} type="text" ></input> <br/>
        <button>SUbmit</button>
    </div>
    </form>
  )
}
