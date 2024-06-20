
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <p>Enter your name:</p>
      <input onChange={(e) => setName(e.target.value)}></input>
      {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
