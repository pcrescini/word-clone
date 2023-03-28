import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessResults, setGuessResults] = React.useState([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  function handleGuessResult(guess) {
    console.log(`guess: ${guess}`);
    const nextGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);
  }

  function handleCheckGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const nextCheckedGuess = [...checkedGuesses, checkedGuess]
    setCheckedGuesses(nextCheckedGuess);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} checkedGuesses={checkedGuesses} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuessResult={handleGuessResult}
        handleCheckGuess={handleCheckGuess}
      />
    </>
  );
}

export default Game;
