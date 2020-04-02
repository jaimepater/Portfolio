/**
 *
 * Tests for Landscape
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Landscape from '../Landscape';

describe('Landscape', () => {
  it('Renders Landscape', () => {
    const shallowComponent = shallow(<Landscape />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
