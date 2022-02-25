import React, { useState } from "react";

const WithObject = () => {
  const userData = {
    name: "Chandan",
    age: "23",
    school: "MVM",
    college: "SGSITS",
  };

  const [data, setData] = useState(userData);

  const onChangeData = () => {
    setData({
      //   ...data,
      ...data,
      college: "MITS",
    });
  };

  return (
    <div>
      <h1>Update Only Object Data with (...) spread operator</h1>
      <h2>
        Name: {data.name}, Age:{data.age}, School:{data.school}, College:
        {data.college}
      </h2>
      <button onClick={onChangeData}>Update College Name</button>
    </div>
  );
};

export default WithObject;
