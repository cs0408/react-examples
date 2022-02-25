import React, { useState } from "react";

const SignupForm1 = () => {
  // state for input fields
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
      } else if (fieldName === "email") {
        return {
          firstName: previousVale.firstName,
          lastName: previousVale.lastName,
          email: fieldValue,
          password: previousVale.password,
        };
      } else {
        return {
          firstName: previousVale.firstName,
          lastName: previousVale.lastName,
          email: previousVale.email,
          password: fieldValue,
        };
      }
    });
  }

  //   function for submit form
  function onSubmitForm(event) {
    //  this line remove default setting(auto refresh on submit form) of <form> tag
    event.preventDefault();
    alert("Form submitted!!");
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          <div>
            <h1>Hii! </h1>
            <p>
              {" "}
              {userData.firstName}
              <br />
              {userData.lastName}
              <br />
              {userData.email}
              <br />
              {userData.password}
            </p>

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
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={inputEvent}
              value={userData.email}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={inputEvent}
              value={userData.password}
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
export default SignupForm1;
