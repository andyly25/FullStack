import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });
});
