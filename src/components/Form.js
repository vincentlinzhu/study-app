import { setAnalyticsCollectionEnabled } from "@firebase/analytics";
import React from "react";
import { useState } from "react";

export default function Form() {
  const [state, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    //const todoRef = firebase.database().ref("");
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}
