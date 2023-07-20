import React from 'react';

import { range } from '../../utils';

function Guess({ value, status }) {
  // sets variable as undefined using optional chaining operator if guessResults array is empty
  const guessResultsWord = value?.value;
  const guessResultsWordStatus = status;

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span
          key={num}
          className={
            guessResultsWordStatus
              ? `cell ${guessResultsWordStatus[num].status} num-${num}`
              : 'cell'
          }
          style={{ animationDelay: `${num * 200}ms` }}
        >
          {guessResultsWord ? guessResultsWord[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
