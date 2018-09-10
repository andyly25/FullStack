import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });
});
