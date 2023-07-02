import React from 'react';

interface CardItem {
  id: number;
  imgUrl: string;
}

interface CardProps {
  card: CardItem;
  moveCard: (direction: 'left' | 'right', card: CardItem) => void;
}

const Card: React.FC<CardProps> = ({ card, moveCard }) => {
  const handleMoveLeft = () => {
    moveCard('left', card);
  };

  const handleMoveRight = () => {
    moveCard('right', card);
  };

  return (
    <li className="card">
      <div className="card_image">
        <img src={card.imgUrl} alt="" />
      </div>
      <div className="card_content">
        <button className="left" onClick={handleMoveLeft}>
          Left
        </button>
        <button className="right" onClick={handleMoveRight}>
          Right
        </button>
      </div>
    </li>
  );
};

export default Card;
