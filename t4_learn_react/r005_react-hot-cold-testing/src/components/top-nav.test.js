import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
});
