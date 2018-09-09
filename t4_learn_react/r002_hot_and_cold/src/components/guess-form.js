import React from 'react';

export default class GuessForm extends React.Component {
  onSubmit (e) {
    e.preventDefault();
    // if user input exists
    if (this.props.onUserGuess) {
      const value = this.input.value;
      // we run the onUserGuess
      console.log('inside guess-form', value);
      this.props.onUserGuess(value);
    }
    // reset the value
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}> 
        <input type="number" required 
          min="1" max="100"
          ref={input => (this.input = input)}
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
}