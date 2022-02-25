import React from "react";
import "./external.css";

const WayOfCss = () => {
  // This is Object - and we used this object as a styling
  const internal_css = {
    "font-family": "Times New Roman",
    color: "blue",
  };

  return (
    <div>
      <h1>3 ways of used CSS in react-app</h1>
      {/* External CSS */}
      <h3>External CSS</h3>
      <p className="external-css">
        Hii Buddy! My name is Chandan Sahu and I'm from Nowgong, Chhatarpur,
        Madhya Pradesh, India
      </p>
      {/* Internal CSS */}
      <h3>Internal CSS</h3>
      <p style={internal_css}>
        Hii Buddy! My name is Chandan Sahu and I'm from Nowgong, Chhatarpur,
        Madhya Pradesh, India
      </p>
      {/* Inline CSS */}
      <h3>Inline CSS</h3>
      <p style={{ color: "red", fontFamily: "Times New Roman" }}>
        Hii Buddy! My name is Chandan Sahu and I'm from Nowgong, Chhatarpur,
        Madhya Pradesh, India
      </p>
    </div>
  );
};

export default WayOfCss;
