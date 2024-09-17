import React,{useState,useEffect} from 'react'

export default function UseEffectMouse() {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)
    const mouseListener = (e) => {
        console.log("MouseEvent")
        setX(e.clientX)
        setY(e.clientY)
    }
     useEffect( ()=> {
        console.log("use effect for mouse")
        window.addEventListener('mousemove',mouseListener)
     },[])

  return (
    <div>
      Hooks X :{x} , Hooks Y:{y}
    </div>
  )
}
