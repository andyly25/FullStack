import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders guess count', () => {
    const guessCount = 8;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />)
    // You've made <span id="count">{props.guessCount}</span> {guessNoun}!
    expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`)
  })
});
