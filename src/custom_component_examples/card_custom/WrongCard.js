import React from "react";

// Correct way, but we never used HTML in this component from another component beacuse it's not contain children
// like - we write some text inside h1, p, h3, h4, span tag but ==> we never able to write some text or images or link in this Card
//  Because we need a children ==> show check CorrectCard.js file for custom Component card

const WrongCard = () => {
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
    borderColor: "red",
    backgroundColor: "orange",
  };

  //   Main return function
  return (
    <div style={card_style}>
      <h2>Hii I'm WrongCard.js file</h2>
    </div>
  );
};

export default WrongCard;
