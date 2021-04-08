import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="counter">
      <div className="conter__value">{number}</div>
      <button className="counter__add-btn" onClick={onIncrease}>
        +1
      </button>
      <button className="counter__minus-btn" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
};

export default Counter;
