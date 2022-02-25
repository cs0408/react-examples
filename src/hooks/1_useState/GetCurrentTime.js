import React, { useState } from "react";

const GetCurrentTime = () => {
  //   const timeIs = =======> for when press on button the time updated
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // function for get time
  function fetchTime() {
    setTime(new Date().toLocaleTimeString());
  }
  // Digital clock ======> for auto update time
  const [digitalTime, setDigitalTime] = useState(
    new Date().toLocaleTimeString()
  );
  function getAutoTime() {
    setDigitalTime(new Date().toLocaleTimeString());
  }
  setInterval(getAutoTime, 1000);

  return (
    <div>
      <h1>Time is= {time}</h1>
      <button onClick={fetchTime}>Refresh for current time</button>
      <h1>Digital Clock, Time is= {digitalTime} </h1>
    </div>
  );
};

export default GetCurrentTime;
