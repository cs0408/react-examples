import React, { useState } from "react";

// This program used for ===> Print input data on screen
const PrintText2 = () => {
  // for text
  const [name, setName] = useState();
  //
  function inputEvent(event) {
    setName(event.target.value);
  }
  return (
    <>
      <div>
        <h1>Hii! '{name}' </h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={inputEvent}
          autoComplete="off"
        />
        <button>Submit</button>
      </div>
    </>
  );
};
export default PrintText2;
