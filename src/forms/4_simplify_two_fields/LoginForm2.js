import React, { useState } from "react";

const LoginForm2 = () => {
  // state for input fields
  const [fullData, setFullData] = useState();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });

  // inputEvent for onChange
  function inputEvent(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.name);

    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    // Check field name and insert value in it
    setUserData((previousVale) => {
      console.log(previousVale);
      if (fieldName === "firstName") {
        return {
          firstName: fieldValue,
          lastName: previousVale.lastName,
          email: previousVale.email,
          password: previousVale.password,
        };
      } else if (fieldName === "lastName") {
        return {
          firstName: previousVale.firstName,
          lastName: fieldValue,
          email: previousVale.email,
          password: previousVale.password,
        };
      }
    });
  }

  //   function for submit form
  function onSubmitForm(event) {
    //  this line remove default setting(auto refresh on submit form) of <form> tag
    event.preventDefault();
    //
    setFullData(userData.firstName + " " + userData.lastName);
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          <div>
            <h1>Hii! </h1>
            <p>{fullData}</p>

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={inputEvent}
              value={userData.firstName}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={inputEvent}
              value={userData.lastName}
              autoComplete="off"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm2;
