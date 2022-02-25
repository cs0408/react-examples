import React from "react";

const Calculator = () => {
  return (
    <div>
      <h1>Simple Calculator</h1>
      <h3>
        Sum of two numbers is: <span style={{ color: "blue" }}>{3 + 3}</span>
      </h3>
      <h3>
        Mul of two numbers is: <span style={{ color: "blue" }}>{3 * 3}</span>
      </h3>
      <h3>
        Div of two numbers is: <span style={{ color: "blue" }}>{3 / 3}</span>
      </h3>
      <h3>
        Sub of two numbers is: <span style={{ color: "blue" }}>{3 - 3}</span>
      </h3>
      <h3>
        Mod of two numbers is: <span style={{ color: "blue" }}>{3 % 3}</span>
      </h3>
    </div>
  );
};

export default Calculator;
