import React,{useState,useEffect} from 'react'

export default function UseEffectEx() {
    const[count,updateCount] = useState(0)
    const[name,updateName] = useState("")
    useEffect(() => {
            console.log("updating document")
             document.title = `You clicked ${count} times`
    },[count])


  return (
    <div>
        <input type="text" value={name} onChange={ (e) => updateName(e.target.value) }></input>
        <button onClick={ ()=> updateCount(prevState => prevState+1) }>ClickHere{count}times</button>
      
    </div>
  )
}
