import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    // TypeError: Cannot read property 'map' of undefined
    shallow(<GuessList guesses={[]}/>);
  });
});
