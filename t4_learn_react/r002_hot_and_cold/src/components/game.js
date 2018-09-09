import React from 'react';

import GuessForm from './guess-form'
import Result from './result'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Guess!',
      answer: 20
    };
  }
  render() {
    const {answer} = this.state
    console.log(answer);
    return (
      // everything located within this div
      <div>
        <main>
          <GuessForm />
          <p>The answer is {answer}</p>
          <Result />
        </main>
      </div>
    )
  }

}