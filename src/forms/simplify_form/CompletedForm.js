import React, { useState } from "react";

const CompletedForm = () => {
  // state for showing data
  const [userData, setUserData] = useState();
  // state object for fields
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // inputEvent for onChange
  function inputEvent(event) {
    //   Destructuring name and value
    console.log(event.target);
    const { name, value } = event.target;
    // name == input field name
    // value == input filed value

    // Check field name, then insert value in it
    setData((previousVale) => {
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

    // validate form
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.email == "" ||
      data.password == ""
    ) {
      alert("Field could not be Empty!!!");
    } else {
      setUserData(
        data.firstName +
          " " +
          data.lastName +
          ", " +
          data.email +
          ", " +
          data.password
      );
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          <div>
            <h1>Hii! </h1>
            <p>{userData}</p>

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={inputEvent}
              value={data.firstName}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={inputEvent}
              value={data.lastName}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={inputEvent}
              value={data.email}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={inputEvent}
              value={data.password}
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
export default CompletedForm;
