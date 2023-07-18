import React from 'react';

function GuessInput({ handleGuessResult, handleCheckGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, [gameStatus]);

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessResult(guess);
    handleCheckGuess(guess);
    setGuess('');
  }

  return (
    <>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter Guess:</label>
        <input
          ref={inputRef}
          id='guess-input'
          type='text'
          required
          pattern='[a-zA-Z]{5}'
          maxLength={5}
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
          disabled={gameStatus !== 'running'}
          title='5 Letter Word'
        />
      </form>
    </>
  );
}

export default GuessInput;
