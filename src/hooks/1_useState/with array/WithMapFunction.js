import React, { useState } from "react";

const WithMapFunction = () => {
  const bioData = [
    {
      id: 0,
      name: "Chandan",
      age: 27,
    },
    {
      id: 1,
      name: "Karan",
      age: 25,
    },
    {
      id: 2,
      name: "Anil",
      age: 26,
    },
    {
      id: 3,
      name: "Sachin",
      age: 20,
    },
  ];

  const [userArray, setUserArray] = useState(bioData);

  const clearArray = () => {
    setUserArray([]);
  };
  return (
    <div>
      {userArray.map((item) => {
        return (
          <h1>
            Name= {item.name}, Age= {item.age}, ID= {item.id}
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear Array</button>
    </div>
  );
};

export default WithMapFunction;
