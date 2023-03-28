import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

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
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);

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
    const nextCheckedGuess = [...checkedGuesses, checkedGuess];
    setCheckedGuesses(nextCheckedGuess);
  }

  function handleEndBanner(guess) {
    setIsCorrect((guess === answer));
    setIsGameOver((guess === answer));

    const nextNumOfGuesses = numOfGuesses + 1;
    setNumOfGuesses(nextNumOfGuesses);

    if (
      (!isCorrect && nextNumOfGuesses === 6) ||
      (isCorrect && nextNumOfGuesses <= 6)
    ) {
      setIsGameOver(true);
    }
  }

  return (
    <>
      <GuessResults
        guessResults={guessResults}
        checkedGuesses={checkedGuesses}
        answer={answer}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuessResult={handleGuessResult}
        handleCheckGuess={handleCheckGuess}
        handleEndBanner={handleEndBanner}
        isGameOver={isGameOver}
        isCorrect={isCorrect}
      />
      <Banner
        numOfGuesses={numOfGuesses}
        answer={answer}
        isCorrect={isCorrect}
        isGameOver={isGameOver}
      />
    </>
  );
}

export default Game;
