import React, { useState } from 'react';
import './BattleShipBoard.css';

const BattleShipBoard = ({ ships }) => {
  const boardSize = 10; // Taille du tableau de bataille navale
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(false)); // Tableau pour stocker l'état des cases

  // Fonction pour gérer le clic sur une case
  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = !newBoard[index];
    setBoard(newBoard);
  };

  return (
    <div className="battle-ship-board">
      <div className="board-container">
        {board.map((isClicked, index) => (
          <div
            key={index}
            className={`cell ${isClicked ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
          >
            {ships.some((ship) => ship.position[0] === index % boardSize && ship.position[1] === Math.floor(index / boardSize)) ? (
              <span className="ship-marker">X</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleShipBoard;
