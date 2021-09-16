import React from 'react';

const Square = ({ value, clickHandler }) => {
  return (
    <button type="button" className="square" onClick={clickHandler}>
      {value}
    </button>
  );
};

export default Square;
