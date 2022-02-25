import React, { useState } from "react";

const Toggle = () => {
  const [userName, setUserName] = useState("Chandan Sahu");

  const changeName = () => {
    let name = userName;
    if (userName === "Chandan Sahu") {
      setUserName("Nikki Sahu");
    } else {
      setUserName("Chandan Sahu");
    }
  };
  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
};

export default Toggle;
