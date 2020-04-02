/**
 *
 * Tests for CloudBlue
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import CloudBlue from '../CloudBlue';

describe('CloudBlue', () => {
  it('Renders CloudBlue', () => {
    const shallowComponent = shallow(<CloudBlue />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
