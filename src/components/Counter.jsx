import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const increment = count + 1;
    setCount(increment);
//     console.log(count)
  };
  return (
    <div>
      <button onClick={handleClick} className="border rounded p-2">You press me {count} times</button>
    </div>
  );
};

export default Counter;
