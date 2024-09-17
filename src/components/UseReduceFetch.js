import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  post: {},
};
const reducer = (currentstate, action) => {
  switch (action.type) {
    case "LoadingSuccess":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "error":
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };
    default:
      return currentstate;
  }
};

export default function UseReduceFetch() {
  const [state, dispatcher] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatcher({type:'LoadingSuccess', payload: response.data})
      })
      .catch((error) => {
        dispatcher({type:'error'})

      });
  },[]);
  return <div>
    {state.loading?"loading":state.post.title}
    {state.error? 'error':null}

  </div>;
}
