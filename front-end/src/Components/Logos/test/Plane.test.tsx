/**
 *
 * Tests for Plane
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Plane from '../Plane';

describe('Plane', () => {
  it('Renders Plane', () => {
    const shallowComponent = shallow(<Plane />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
