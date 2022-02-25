import React, { useState } from "react";

// This program used for ===> Print input data, when click on submit
const PrintText3 = () => {
  // for text
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  // function for input field
  function inputEvent(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  //   function for onsubmit button
  function onSubmitName() {
    setFullName(name);
    setName("");
  }

  return (
    <>
      <div>
        <h1>Hii! {fullName} </h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={inputEvent}
          autoComplete="off"
          value={name}
        />
        <button onClick={onSubmitName}>Submit</button>
      </div>
    </>
  );
};
export default PrintText3;
