import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTenativeGuess] = React.useState('');

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, [gameStatus]);

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTenativeGuess('');
  }

  return (
    <>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter Guess:</label>
        <input
          title='5 Letter Word'
          id='guess-input'
          type='text'
          required
          pattern='[a-zA-Z]{5}'
          maxLength={5}
          disabled={gameStatus !== 'running'}
          ref={inputRef}
          value={tentativeGuess}
          onChange={(event) => {
            const nextTentativeGuess = event.target.value.toUpperCase();
            setTenativeGuess(nextTentativeGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
