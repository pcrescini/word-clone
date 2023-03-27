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
      value: guess,
      id: crypto.randomUUID(),
    }
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);
    console.log("Guess Results", nextGuessResults);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuessResult={handleGuessResult}
      />
    </>
  );
}

export default Game;
