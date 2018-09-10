import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  // it('Renders the title', () => {
  //     const title = 'Foo';
  //     const wrapper = shallow(<Board title={title} />);
  //     expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
  // });

  // props and state, check auralStatus
  it('Renders aural status', () => {
    const TestStatus = 'Foo';
    const wrapper = shallow(<AuralStatus auralStatus={TestStatus} />);
    expect(wrapper.contains(TestStatus)).toEqual(true)
  })
});
