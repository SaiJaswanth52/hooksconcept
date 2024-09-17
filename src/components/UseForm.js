import React, { useState } from 'react'

export default function useForm(initialvalue) {

  const[value,setValue] = useState(initialvalue)  
  const reset = ()=> {
    setValue(initialvalue)
  }
  const bind ={
    value, //represents value is null 
    onChange: e =>{
      setValue(e.target.value)
    }
  }
  return [value,bind,reset]
}
