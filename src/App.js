import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import History from './components/History ';
import './styles/root.scss';
import StatusMessage from './components/StatusMessage';

const App = () => {
  const NEW_GAME = [
    {
      board: Array(9).fill(null),
      isNext: true,
    },
  ];
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const { winner, winnerSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return current.isNext ? 'X' : 'O';
        }
        return square;
      });

      return [...prev, { board: newBoard, isNext: !last.isNext }];
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TACK TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winnerSquares={winnerSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
