import React from 'react';

import './game.css'

import Guess from './guess'
import Result from './result'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Guess!',
      answer: Math.floor(Math.random() * 100) + 1
    };
  }

  userGuess (guess) {
    // check if user input is valid
    guess = parseInt(guess, 10);
    if (isNaN(guess)){
      this.setState({feedback: 'Enter a valid number'})
      return;
    }

    const diff = Math.abs(guess - this.state.answer);
    let feedback;
    if(feedback >= 50) {
      feedback = 'COLD!';
    } 
    else if (feedback >= 25) {
      feedback = 'COOL!';
    }
    else if (feedback >= 10) {
      feedback = 'WARM!';
    }
    else if (feedback >= 5) {
      feedback = 'HOT';
    }
    else {
      feedback = 'CORRECT! Restart if you\'d like';
    }

    this.setState({
      feedback,
      // need to add guesses into the array as well
      guesses: [...this.state.guesses, guess]
    });
  }


  render() {
    const {answer, feedback, guesses} = this.state
    console.log(answer);
    return (
      // everything located within this div
      <div>
        <main>
          <Guess 
            feedback={feedback}
            onUserGuess={guess => this.userGuess(guess)}
          />
          <p className="child">The answer is {answer}</p>
          <Result 
            guesses={guesses}
          />
        </main>
      </div>
    )
  }

}