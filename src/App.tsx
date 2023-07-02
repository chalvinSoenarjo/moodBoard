import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';



interface CardItem {
  id: number;
  imgUrl: string;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([]);

  const generateCard = (idx: number): CardItem => {
    return {
      id: idx,
      imgUrl: `https://picsum.photos/300/300?sig=${idx}`,
    };
  };

  const seedCards = (numOfCards = 10) => {
    const newCards: CardItem[] = [];
    for (let i = 1; i <= numOfCards; i++) {
      const card = generateCard(i);
      newCards.push(card);
    }
    setCards(newCards);
  };

  useEffect(() => {
    seedCards(); // Call seedCards when the component mounts
  }, []);

  const moveCard = (direction: 'left' | 'right', cardToEdit: CardItem) => {
    setCards((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card.id === cardToEdit.id);
      if (cardIndex === -1) return prevCards;

      const targetIndex =
        direction === 'left' ? cardIndex - 1 : cardIndex + 1;

      if (targetIndex < 0 || targetIndex >= prevCards.length) return prevCards;

      const updatedCards = [...prevCards];
      [updatedCards[cardIndex], updatedCards[targetIndex]] = [
        updatedCards[targetIndex],
        updatedCards[cardIndex],
      ];

      return updatedCards;
    });
  };

  return (
    <div className="main">
      <div className="card-row">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
