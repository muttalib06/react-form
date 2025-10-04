import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(12);
  const handleClick = () => {
    setAge((a) => a + 1);
    setAge((a) => a + 1);
    setAge((a) => a + 1);
  };
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        type="text"
        name=""
      />
      <button onClick={handleClick} className="border p-2">
        Increment
      </button>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UseState;
