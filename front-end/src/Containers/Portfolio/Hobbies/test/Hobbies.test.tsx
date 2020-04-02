/**
 *
 * Tests for Hobbies
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Hobbies from '../Hobbies';

describe('Hobbies', () => {
  it('Renders Hobbies', () => {
    const shallowComponent = shallow(<Hobbies />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
