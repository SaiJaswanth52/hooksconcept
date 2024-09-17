import React,{useState} from 'react'
import UseDocumentTitle from './UseDocumentTitle'

export default function DocTitleOne() {
   const[count,increment,decrement,reset] = UseDocumentTitle(0,2)
  return (
    <div>
      count is {count} <br></br>
      <button onClick={increment}>Increment {console.log(`increment call`)}</button>
      <button onClick={decrement}>Decrement {console.log(`decrement call`)}</button>
      <button onClick={reset}>Reset {console.log(`reset call`)}</button>
    </div>
  )
}
