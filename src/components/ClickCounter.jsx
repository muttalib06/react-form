import React, { useRef } from "react";

const ClickCounter = () => {
  let ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("clicked" + ref.current);
  };
  console.log(ref.current);
  return (
    <div>
      <button onClick={handleClick} className="border p-2 rounded-md">
        Click
      </button>
      <p>Count: {ref.current}</p>
    </div>
  );
};

export default ClickCounter;
