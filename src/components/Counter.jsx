import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="counter">
      <div className="counter__value" data-testid={'counter__value'}>
        {number}
      </div>
      <button
        className="counter__inc-btn"
        onClick={onIncrease}
        data-testid={'counter__inc-btn'}
      >
        +1
      </button>
      <button
        className="counter__dec-btn"
        onClick={onDecrease}
        data-testid={'counter__dec-btn'}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
