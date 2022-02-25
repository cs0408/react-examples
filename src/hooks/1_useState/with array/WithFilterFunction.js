import React, { useState } from "react";

const WithFilterFunction = () => {
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

  const [allStudent, setAllStudent] = useState(bioData);

  return (
    <div>
      {allStudent.map((item) => {
        return (
          <h1>
            Name= {item.name}, Age= {item.age}, ID= {item.id}
          </h1>
        );
      })}
      <button>Remove those students age is greater than 25</button>
      
    </div>
  );
};

export default WithFilterFunction;
