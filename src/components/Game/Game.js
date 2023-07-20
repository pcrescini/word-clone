import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS)); // Picks a random word on every pageload.
  const [gameStatus, setGameStatus] = React.useState('running'); // running / won / lost
  const [guesses, setGuesses] = React.useState([]);

  // Logging solution in the console to make debugging easier.
  React.useEffect(() => {
    console.log({ answer });
  }, [answer]);

  function handleSubmitGuess(tentativeGuess) {
    console.log(`Your guess: ${tentativeGuess}`);
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleGameRestart() {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleGameRestart={handleGameRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleGameRestart={handleGameRestart} />
      )}
    </>
  );
}

export default Game;
