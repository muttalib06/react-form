import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const handleClick = (newCard) => {
    const newArrayOfCards = [...cards, newCard];
    setCards(newArrayOfCards);
  };

  const removeCard = () => {
//     const newCards = [...cards];
//     newCards.pop();
    setCards(cards.slice(0,-1))
  };
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <button
        onClick={() => handleClick("card")}
        className="rounded p-2 bg-amber-500"
      >
        Add Card
      </button>
      <button onClick={removeCard} className="rounded p-2 bg-amber-500 ml-2">
        Remove Card
      </button>
      <div className="mt-10 flex flex-wrap gap-2">
        {cards.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
