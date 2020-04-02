/**
 *
 * Tests for Sun
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Sun from '../Sun';

describe('Sun', () => {
  it('Renders Sun', () => {
    const shallowComponent = shallow(<Sun />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
