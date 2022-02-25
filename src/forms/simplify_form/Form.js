import React, { useState } from "react";

const Form = () => {
  const [fullData, setFullData] = useState();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // inputEvent for onChange
  function inputEvent(event) {
    //   Destructuring name and value
    const { name, value } = event.target;
    // name == input field name
    // value == input filed value

    // Check field name, then insert value in it
    setUserData((previousVale) => {
      console.log(previousVale);
      return {
        ...previousVale,
        [name]: value,
      };
    });
  }

  //   function for submit form
  function onSubmitForm(event) {
    //  this line remove default setting(auto refresh on submit form) of <form> tag
    event.preventDefault();
    //
    setFullData(
      userData.firstName +
        " " +
        userData.lastName +
        ", " +
        userData.email +
        ", " +
        userData.password
    );
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
export default Form;
