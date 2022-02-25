import React, { useState } from "react";

// This program used for ===> Print input data on console
const PrintText = () => {
  // for text
  const [name, setName] = useState();
  //
  function inputEvent(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <div>
        <h1>Hii! {name} </h1>
        <input type="text" placeholder="First Name" onChange={inputEvent} />
        <button>Submit</button>
      </div>
    </>
  );
};
export default PrintText;
