import React,{useReducer} from 'react'

const initialstate = {
  firstCount:0
}
const reducer = (currentstate,action)=>{
    switch(action.type){
        case 'increment':
         return {firstCount: currentstate.firstCount + action.value}
        case 'decrement':
            return {firstCount: currentstate.firstCount - action.value}
        case 'reset':
           return initialstate
        default:
            return currentstate
    }
    

}
export default function UseReduceEx() {
  const [count,dispatcher] = useReducer(reducer,initialstate)
  const [counttwo,dispatchertwo] = useReducer(reducer,initialstate)

  return (
    <div>
        Count is {count.firstCount}
        <button onClick={ () => dispatcher({type:'increment', value:1})}>Increment</button>
        <button onClick={ () => dispatcher({type:'decrement', value:1})}>Decrement</button>
        <button onClick={ () => dispatcher({type:'reset'})}>Reset</button>
    <div>
        <div>
        CountTwo is {counttwo.firstCount}</div>
        <button onClick={ () => dispatchertwo({type:'increment', value:2})}>Increment2</button>
        <button onClick={ () => dispatchertwo({type:'decrement', value:2})}>Decrement2</button>
        <button onClick={ () => dispatchertwo({type:'reset'})}>Reset</button>

    </div>

    </div>
  )
}
