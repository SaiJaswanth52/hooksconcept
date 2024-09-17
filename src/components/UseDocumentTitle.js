import React,{useCallback, useState} from 'react'

export default function UseDocumentTitle(initialcount =0, value) {
  const[count,setCount] = useState(initialcount)

   const increment = useCallback(()=>{
    setCount(prevcount => prevcount+value)
   },[value])

   const decrement = useCallback(()=>{
    setCount(prevcount => prevcount-value)
   },[value])
   const reset = useCallback(()=>{
    setCount(initialcount)
   },[initialcount])
  return [count,increment,decrement,reset]
}
