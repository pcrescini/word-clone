import React from 'react';

import Banner from '../Banner';
import RestartButton from '../RestartButton';

function WonBanner({ numOfGuesses, handleGameRestart }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.focus();
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
        <RestartButton ref={ref} />
      </form>
    </Banner>
  );
}

export default WonBanner;
