
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("");
  return (
    <div>
      <p>Enter your name:</p>
      <input onChange={(e) => setName(e.target.value)}></input>
      <p>Hello {name}!</p>
    </div>
  )
}

export default App
