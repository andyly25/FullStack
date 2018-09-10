import React from 'react';
// mount used to help for full DOM rendering 
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  // smoke test to check components
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  // use mount, should be similar to add-form example
  /*
    it('Should fire the onAdd callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddForm onAdd={callback} />);
        const value = 'Foobar';
        wrapper.instance().setEditing(true);
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });
   */
  it('Should fire the onMakeGuess callback when the form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onMakeGuess={callback} />)
      const value = 25;
      wrapper.find('input[type="number"]').instance().value = value;
      wrapper.simulate('submit');
      // error, value is a string
      expect(callback).toHaveBeenCalledWith(value.toString());
  });
});
