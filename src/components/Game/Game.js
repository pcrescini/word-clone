import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameWord, setGameWord] = React.useState(() => sample(WORDS));
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

    if (guess.toUpperCase() === gameWord) {
      setGameStatus('won');
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleCheckGuess(guess) {
    const checkedGuess = checkGuess(guess, gameWord);
    const nextCheckedGuess = [...checkedGuesses, checkedGuess];
    setCheckedGuesses(nextCheckedGuess);
  }

  function handleGameRestart() {
    const nextAnswer = sample(WORDS);
    console.info({ nextAnswer });
    setGameWord(nextAnswer);
    setGuessResults([]);
    setCheckedGuesses([]);
    setNumOfGuesses(0);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults
        guessResults={guessResults}
        checkedGuesses={checkedGuesses}
        answer={gameWord}
      />
      <GuessInput
        handleGuessResult={handleGuessResult}
        handleCheckGuess={handleCheckGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={numOfGuesses}
          handleGameRestart={handleGameRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={gameWord} handleGameRestart={handleGameRestart} />
      )}
    </>
  );
}

export default Game;
