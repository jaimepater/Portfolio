/**
 *
 * Tests for H3
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import H3 from '../H3';

describe('H3', () => {
  it('Renders H3', () => {
    const shallowComponent = shallow(<H3 />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
