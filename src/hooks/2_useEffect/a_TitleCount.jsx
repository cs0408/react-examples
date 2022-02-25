import React, { useEffect, useState } from "react";

const TitleCount = () => {
  // for state
  const [count, setCount] = useState(0);

  // for effect
  useEffect(() => {
    document.title = `Title Count ${count}`;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default TitleCount;
