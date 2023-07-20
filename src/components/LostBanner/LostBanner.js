import React from 'react';

import Banner from '../Banner';
import RestartButton from '../RestartButton';

function LostBanner({ answer, handleGameRestart }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Banner status='sad'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleGameRestart();
        }}
      >
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <RestartButton ref={ref} />
      </form>
    </Banner>
  );
}

export default LostBanner;
