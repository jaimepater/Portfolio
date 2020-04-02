/**
 *
 * Tests for Bike
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Bike from '../Bike';

describe('Bike', () => {
  it('Renders Bike', () => {
    const shallowComponent = shallow(<Bike />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
