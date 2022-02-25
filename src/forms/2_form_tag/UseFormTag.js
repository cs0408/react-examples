import React, { useState } from "react";

// This program used for ===> Print input data, when click on submit
const UseFormTag = () => {
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
        <form>
          {/* problem with <form> tag is that ==> we could not is our output when be clicked on submit button (because <form> tag refresh the page, when be submit data and "auto refresh functionality is the default behaviour of <form> tag"). So we solved this program in 'LoginForm.js' file, next program */}
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
        </form>
      </div>
    </>
  );
};
export default UseFormTag;
