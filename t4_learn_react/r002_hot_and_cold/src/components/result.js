import React from 'react';

export default function Result (props) {
  const { guesses } = props;
  const guessCount = guesses.length;
  console.log(guesses);

  return (
    <section className="child">
      <h2>Guesses made: {guessCount}</h2>
      <h3> {guesses.join(', ')} </h3>
    </section>
  );
}