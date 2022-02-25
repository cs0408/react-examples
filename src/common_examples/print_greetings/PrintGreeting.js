// Print Greetings
// Print according to time - if,
//                              time>4 && time<=12 ===> GoodMorning
//                              time>12 && time<=17 ===> GoodAfternoon
//                              time>17 && time<=21 ====> GoodEvening
//                              time>21 && time<=24 ===> GoodNight

import React from "react";

const PrintGreeting = () => {
  // get hours
  const todayDate = new Date();
  const hour = todayDate.getHours();
  let greeting = "Greetings";

  // choosed greeting with the help or hour's
  if (hour > 0 && hour <= 4) {
    greeting = "Good Night";
  } else if (hour > 4 && hour <= 12) {
    greeting = "Good Morning";
  } else if (hour > 12 && hour <= 17) {
    greeting = "Good Afternoon";
  } else if (hour > 17 && hour <= 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div>
      <h3>
        <span style={{ color: "blue" }}>{greeting}!</span> Chandan sir
      </h3>
    </div>
  );
};

export default PrintGreeting;
