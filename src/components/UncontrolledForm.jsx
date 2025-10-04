import React, { useRef } from "react";

const UncontrolledForm = () => {
        const inputRef = useRef(null);
        const handleSubmit = (event) => {
                event.preventDefault();
                console.log(inputRef.current.value)
        }
  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="space-y-2 border py-5 px-10 rounded-md">
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
          ref={inputRef}
          className="border rounded-md p-2"
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input
          className="rounded-md p-2 w-full bg-green-500 "
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default UncontrolledForm;
