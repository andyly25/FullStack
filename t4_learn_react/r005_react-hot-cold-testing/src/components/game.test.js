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

  // generate AUralUpdate
});
