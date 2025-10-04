import React, { use, useState } from "react";

const ToDo = () => {
  const [name, setName] = useState("taylor");

  const handleClick = () => {
        setName('Robin')
        console.log(name)
  }
  return (
    <div>
        <h1>Explore useState hook</h1>
      <p>Name:{name} </p>
      <button onClick={handleClick} className="border rounded p-2">Click</button>
      
    </div>
  );
};

export default ToDo;
