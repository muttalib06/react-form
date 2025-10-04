import React, { useRef } from "react";

const UseRef = () => {
  const ref = useRef(0);
  ref.current = "Muttalib";
  console.log(ref.current);
  return <div></div>;
};

export default UseRef;
