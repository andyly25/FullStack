import React from 'react';
// mount used to help for full DOM rendering 
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
});
