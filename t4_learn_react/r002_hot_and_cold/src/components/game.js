import React from 'react';

import './game.css'

import Guess from './guess'
import Result from './result'
import Restart from './restart'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Guess a Number!',
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
    if(diff >= 50) {
      feedback = 'COLD!';
    } 
    else if (diff >= 25) {
      feedback = 'COOL!';
    }
    else if (diff >= 10) {
      feedback = 'WARM!';
    }
    else if (diff >= 1) {
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

  // make a restart
  restart() {
    this.setState({
      guesses: [],
      feedback: 'Guess a number!',
      answer: Math.floor(Math.random() * 100) + 1
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
          <Restart onRestart={() => this.restart()}/>
        </main>
      </div>
    )
  }

}