import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  // props and state
  it('Renders feedback message', () => {
    const TestFeedback = 'Foo';
    const wrapper = shallow(<Feedback feedback={TestFeedback} />);
    expect(wrapper.contains(TestFeedback)).toEqual(true)
  })
});
