import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  // can restart
  it('Can restart', () => {
    const wrapper = shallow(<Game />);
    /*
      this.setState({
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.floor(Math.random() * 100) + 1
      });
     */
    // fake values, need to check for default above
    wrapper.setState({
      guesses: [3, 2, 1],
      feedback: 'Ding dong!',
      auralStatus: '',
      correctAnswer: 0
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    
  })

  // can makeGuess
  it('Can guess', () => {
    const wrapper = shallow(<Game />);
    // set a winning number
    wrapper.setState({
      correctAnswer: 1
    });

    // now to check the conditionals
    /*
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
     */
    wrapper.instance().makeGuess(51);
    expect(wrapper.state('guesses')).toEqual([51]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(31);
    expect(wrapper.state('guesses')).toEqual([51, 31]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(11);
    expect(wrapper.state('guesses')).toEqual([51, 31, 11]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(2);
    expect(wrapper.state('guesses')).toEqual([51, 31, 11, 2]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(1);
    expect(wrapper.state('guesses')).toEqual([51, 31, 11, 2, 1]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });
});
