import React from "react";

const FormData = () => {
  const handleSubmit = (formData) => {
    const name = formData.get("name");
    console.log(name)
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form action={handleSubmit}>
        <input
          className="border rounded p-2"
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <input
          className="bg-green-400 p-2 rounded-md mt-2"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default FormData;
