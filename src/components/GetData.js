import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetData() {
  // const [posts, setPosts] = useState([]);   // to return more than one data we use array.
  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [butt, buttonClicked] = useState(1)
  
  const inputChange = (e) =>{
    buttonClicked(id)
    //console.log(e.target.value)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${butt}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })

      .catch((er) => er);
  }, [butt])

 

  return (
    <div>
      <button type="button" onClick={inputChange} >ID CHANGE</button>
      <input type="text" value={id} onChange={ (e)=> setId(e.target.value)} />
      {posts.title}
      {/* <ul>
        posts are
        {posts.map(e => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
