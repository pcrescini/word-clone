import React from "react";

function GuessInput({
  guess,
  setGuess,
  handleGuessResult,
  handleCheckGuess,
  handleEndBanner,
  isGameOver
}) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleGuessResult(guess);
          handleCheckGuess(guess);
          handleEndBanner(guess);
          setGuess("");
        }}
      >
        <label>Enter Guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern=".{5}"
          maxLength={5}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          disabled={isGameOver}
        />
      </form>
    </>
  );
}

export default GuessInput;
