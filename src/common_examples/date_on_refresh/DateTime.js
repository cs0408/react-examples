// Add one h1 element ex. YOUR NAME
// Add one p element in it with Current Date
// Add one p element in it with Current Time

import React from "react";

const DateTime = () => {
  // for simple watch depend on refrese button
  const todayDate = new Date().toLocaleDateString();
  const timeIs = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Hii! Chandan</h1>
      <p>Today Date is: {todayDate}</p>
      <p>
        Time is: {timeIs} <br />
        when you see the recent time then refresh the page.
      </p>
    </div>
  );
};

export default DateTime;
