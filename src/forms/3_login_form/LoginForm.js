import React, { useState } from "react";

// This program used for ===> Print input data, when click on submit
const LoginForm = () => {
  // for text
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // function for input field
  function inputEventFirstName(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }
  function inputEventLastName(event) {
    // console.log(event.target.value);
    setLastName(event.target.value);
  }

  //   function for submit form
  function onSubmitForm(event) {
    event.preventDefault();
    if (firstName != "" && lastName != "") {
      setFullName(firstName + " " + lastName);
      setFirstName("");
      setLastName("");
    } else {
      alert("Fields could be Empty!!!");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          <div>
            <h1>Hii! {fullName} </h1>
            <input
              type="text"
              placeholder="First Name"
              onChange={inputEventFirstName}
              autoComplete="off"
              value={firstName}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              onChange={inputEventLastName}
              autoComplete="off"
              value={lastName}
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
