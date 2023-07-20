import React from 'react';

const RestartButton = React.forwardRef(function RestartButton(props, ref) {
  return (
    <button type='submit' ref={ref}>
      Restart game?
    </button>
  );
});

export default RestartButton;
