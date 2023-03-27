import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuessResult(guess) {
    console.log(`guess: ${guess}`);
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    }
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);
  }

  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} handleGuessResult={handleGuessResult} />
      <GuessResults guessResults={guessResults} />
    </>
  );
}

export default Game;
