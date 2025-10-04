import React, { useState } from "react";

const ControlledForm = () => {
  // Access form data using controlled components;
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    //     console.log(event.target.value);
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <div className="flex justify-center items-center mt-20">
      <form className="space-y-2 border py-5 px-10 rounded-md">
        <input
          className="border rounded-md p-2"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />{" "}
        <br />
        <input
          className="border rounded-md p-2"
          type="email"
          name="email"
          placeholder="Email"
        />{" "}
        <br />
        <input
          className="border rounded-md p-2"
          type="password"
          name="password"
          placeholder="Password"
          value={inputValue}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          className="rounded-md p-2 w-full bg-green-500 "
          type="submit"
          value="submit"
        />
      </form>
      <p className="border p-3 rounded-md ml-20">{inputValue}</p>
    </div>
  );
};

export default ControlledForm;
