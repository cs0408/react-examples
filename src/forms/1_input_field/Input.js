import React, { useState } from "react";

const Input = () => {
  // for text
  const [name, setName] = useState();

  return (
    <>
      <div>
        <h1>Hii! {name} </h1>
        <input type="text" placeholder="First Name" id="fName" name="fName" />
        <button style={{ marginLeft: "20px" }}>Submit</button>
      </div>
    </>
  );
};
export default Input;
