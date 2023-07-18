import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, handleGameRestart }) {
  const buttonRef = React.useRef();

  React.useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <Banner status='sad'>
      <form onSubmit={handleGameRestart}>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button ref={buttonRef}>Restart game?</button>
      </form>
    </Banner>
  );
}

export default LostBanner;
