import React, { useState } from "react";

const BackgroundChange = () => {
  // for  div background color
  let divBgClr = "purple";
  const [divBg, setDivBg] = useState(divBgClr);
  const [btnBg, setBtnBg] = useState("green");
  const [btnTxt, setBtnTxt] = useState("Click Me");
  function changeDivBg() {
    setDivBg("pink");
    setBtnTxt("Ohh B##dk - back kr");
  }
  //   change button color
  function changeBtnBg() {
    setBtnBg("yellow");
    setDivBg(divBgClr);
    setBtnTxt("Click Me");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30em",
          backgroundColor: divBg,
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2em",
            backgroundColor: btnBg,
          }}
          onClick={changeDivBg}
          onDoubleClick={changeBtnBg}
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
};

export default BackgroundChange;
