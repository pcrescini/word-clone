import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

const Guess = React.memo(function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  function Cell({ num, letter, status }) {
    const cellClass = status ? `cell ${status} num-${num}` : `cell`;
    return (
      <span className={cellClass} style={{ animationDelay: `${num * 200}ms` }}>
        {letter}
      </span>
    );
  }

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          num={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}
);

export default Guess;
