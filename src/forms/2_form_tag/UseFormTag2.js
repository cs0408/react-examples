import React, { useState } from "react";

// This program used for ===> Print input data, when click on submit
const UseFormTag2 = () => {
  // for text
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  // function for input field
  function inputEvent(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  //   function for submit form
  function onSubmitName(event) {
    // remove default behaviour of <form> tag
    // default behaviour is ==> when be clicked on submit button then page is refresh auto
    event.preventDefault();
    {
      /* Remove default behaviour of <form> tag, with using this line of code*/
    }
    // set Values in text
    setFullName(name);
    setName("");
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitName}>
          <div>
            <h1>Hii! {fullName} </h1>
            <input
              type="text"
              placeholder="First Name"
              onChange={inputEvent}
              autoComplete="off"
              value={name}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UseFormTag2;
