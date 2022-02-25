import React from "react";
import CorrectCard from "./CorrectCard";
import WrongCard from "./WrongCard";

const Card = () => {
  return (
    <>
      {/* For WrongCard.js file */}
      <h1>
        This is Custom Card but never contain any data. If be called from
        another file
      </h1>
      <WrongCard>
        <h2>
          {" "}
          Hii I'm text. I'm from Card.js file and I have been used on your card.
        </h2>
      </WrongCard>

      {/* For CorrectCard.js file */}
      <h1>
        This is Custom Card and contain data. If be called from another file
        also.
      </h1>
      <CorrectCard text="Chandan">
        <h2>
          Hii I'm text. I'm from Card.js file and I have been used on your card.
          And I'm children of your card
        </h2>
      </CorrectCard>
    </>
  );
};

export default Card;
