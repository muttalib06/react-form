import React, { useState } from "react";

const Checkbox = () => {
  const [like, setLike] = useState(true);
  const handleChange = (e) => {
    setLike(e.target.checked);
  };
  return (
    <div className="flex justify-center items-center flex-col bg-amber-400 p-3">
      <form action="">
        <label>
          <input onChange={handleChange} type="checkbox" checked={like} />I like
          this
        </label>
      </form>
      <p>{like ? "You like this" : "You do not like this"}</p>
    </div>
  );
};

export default Checkbox;
