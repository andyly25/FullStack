import React from 'react';
import { shallow } from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });
});
