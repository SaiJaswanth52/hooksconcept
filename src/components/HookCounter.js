import React,{useState} from 'react'

export default function HookCounter() {
    const initialCount =0
    const[count,incrementCount] = useState(initialCount)
  return (
    <div>
        Count:{count}
      <button onClick={()=> incrementCount( prevState => prevState+1)}>
        Increment</button>
      <button onClick={()=> incrementCount(prevState => prevState-1)}>
        Decrement</button>
      <button onClick={()=> incrementCount(initialCount)}>
        Reset</button>
      <button onClick={() => incrementCount(prevState => prevState+5)}>
        Increment5</button>
    </div>
  )
}
