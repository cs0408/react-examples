import React from "react";

// This is wrong way to create custom component like, div, h1, p etc.
const CorrectCard = (props) => {
  // card style
  const card_style = {
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 50,
    marginRight: 50,
    padding: "10px",
    borderRadius: "20px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "orange",
  };

  //   Main return function
  return (
    <div style={card_style}>
      <h2>Hii I'm CorrectCard.js file</h2>
      {props.children}
      <h3>
        Hii I'm " 'text' props and value is '{props.text}'" props and I'm came
        from Main.js file
      </h3>
    </div>
  );
};

export default CorrectCard;
