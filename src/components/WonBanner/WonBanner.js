import React from "react";

import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleGameRestart }) {
    const buttonRef = React.useRef();

    React.useEffect(() => {
      buttonRef.current.focus();
    }, []);

  return (
    <Banner status='happy'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleGameRestart();
        }}
      >
        <p>
          <strong>Congratulations!</strong> You got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
        <button type='submit' ref={buttonRef}>
          Restart game?
        </button>
      </form>
    </Banner>
  );
}

export default WonBanner;
