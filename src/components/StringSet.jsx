import React, { useState } from "react";

const StringSet = () => {
        const [text, setText] = useState('Bangladesh');
        const handleChange = (e) => {
                setText(e.target.value)

        }
  return (
    <div>
      <input onChange={handleChange} className="border rounded p-2" value={text} type="text" /> <br />
      <p>You typed {text} </p> <br />
      <button onClick={() => setText('Bangladesh')} className="border rounded bg-green-400 p-2">Reset</button>
    </div>
  );
};

export default StringSet;
