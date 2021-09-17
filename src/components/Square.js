import React from 'react';

const Square = ({ value, clickHandler, isWinnerSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinnerSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default Square;
