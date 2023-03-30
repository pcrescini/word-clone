import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  // running / won / lost
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessResult(guess) {
    console.log(`guess: ${guess}`);
    const nextGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    const nextGuessResults = [...guessResults, nextGuess];
    setGuessResults(nextGuessResults);

    const nextNumOfGuesses = numOfGuesses + 1;
    setNumOfGuesses(nextNumOfGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleCheckGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const nextCheckedGuess = [...checkedGuesses, checkedGuess];
    setCheckedGuesses(nextCheckedGuess);
  }

  return (
    <>
      <GuessResults
        guessResults={guessResults}
        checkedGuesses={checkedGuesses}
        answer={answer}
      />
      <GuessInput
        handleGuessResult={handleGuessResult}
        handleCheckGuess={handleCheckGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={numOfGuesses} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
