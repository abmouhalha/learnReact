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

  // Afficher les navires sur le tableau de bataille
  const renderShips = () => {
    return ships.map((ship) => {
      const [row, col] = ship.Position;
      const shipStyle = {
        top: `${row * 40}px`,
        left: `${col * 40}px`,
      };
      return (
        <div
          key={ship.Id}
          className={`ship ${ship.Type}`}
          style={shipStyle}
        ></div>
      );
    });
  };

  return (
    <div className="battle-ship-board">
      <div className="board-container">
        {board.map((isClicked, index) => (
          <div
            key={index}
            className={`cell ${isClicked ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
        {renderShips()}
      </div>
    </div>
  );
};

export default BattleShipBoard;
