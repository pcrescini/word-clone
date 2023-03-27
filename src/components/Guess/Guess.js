import React from "react";

import { range } from "../../utils";

function Guess({ value }) {
  // sset variable as undefined if guessResults array is empty using optional chaining operator
  const guessResultsWord = value?.value;
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {guessResultsWord ? guessResultsWord[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
