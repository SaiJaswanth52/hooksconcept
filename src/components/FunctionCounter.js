import React,{useState} from 'react'

export default function FunctionCounter() {
    const[count, incrementCount] = useState(0)

   return (
    <div>
        <button type="submit" onClick={()=>incrementCount(count+1)}>
            Clicked count is {count}</button>
      
    </div>
  )
}
