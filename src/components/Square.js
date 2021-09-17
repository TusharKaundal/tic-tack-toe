import React from 'react';

const Square = ({ value, clickHandler, isWinnerSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={clickHandler}
      style={{ fontWeight: isWinnerSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
