import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<Header />);
  });
});
