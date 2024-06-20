
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input type="text" placeholder="Enter your name:"  onChange={(e) => setName(e.target.value)}></input>
      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  )
}

export default App
