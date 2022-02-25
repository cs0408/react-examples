import React, { useState } from "react";

const TodoExample = () => {
  // Todo Data list
  const data = [
    {
      id: 0,
      text: "Reading Book",
    },
    {
      id: 1,
      text: "Writing Book",
    },
    {
      id: 2,
      text: "Cutting Book",
    },
    {
      id: 3,
      text: "Sleeping Book",
    },
    {
      id: 4,
      text: "Weeping Book",
    },
  ];

  //   state for todo
  const [listArray, setListArray] = useState(data);

  const clearArray = () => {
    setListArray([]);
  };

  const remove_me = (id) => {
    const newArray = listArray.filter((task) => {
      return task.id !== id;
    });
    setListArray(newArray);
  };

  return (
    <div>
      {listArray.map((currElm) => {
        return (
          <h2 key={currElm.id}>
            {currElm.text}
            {"  "}
            <button onClick={() => remove_me(currElm.id)}>Remove</button>
          </h2>
        );
      })}
      <button onClick={clearArray}>CLear Array</button>
    </div>
  );
};

export default TodoExample;
