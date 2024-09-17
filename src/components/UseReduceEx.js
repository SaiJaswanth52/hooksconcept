import React,{useReducer} from 'react'

const initialstate = 0
const reducer = (currentstate,action)=>{
    switch(action){
        case 'increment':
         return currentstate+1
        case 'decrement':
            return currentstate-1
        case 'reset':
           return initialstate
        default:
            return currentstate
    }
    

}
export default function UseReduceEx() {
  const [count,dispatcher] = useReducer(reducer,initialstate)
  return (
    <div>
        Count is {count}
        <button onClick={ () => dispatcher('increment')}>Increment</button>
        <button onClick={ () => dispatcher('decrement')}>Decrement</button>
        <button onClick={ () => dispatcher('reset')}>Reset</button>

    </div>
  )
}
