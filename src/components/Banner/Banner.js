import React from "react";

function Banner({ numOfGuesses, answer, isCorrect, isGameOver }) {
  let correctBanner;
  let incorrectBanner;

  if (isCorrect && isGameOver) {
    correctBanner = (
      <div className="happy banner">
        <p>
          <strong> Congratulations!</strong> You got it in{" "}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (!isCorrect && isGameOver) {
    incorrectBanner = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return (
    <>
      {correctBanner}
      {incorrectBanner}
    </>
  );
}

export default Banner;
