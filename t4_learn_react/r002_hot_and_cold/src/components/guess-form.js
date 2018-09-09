import React from 'react';

export default function GuessForm (props) {
  return (
    <section>
      <form> 
        <input type="number" required />
        <button type="submit">Guess</button>
      </form>
    </section>
  );
}