/**
 *
 * Tests for StaticBanner
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import StaticBanner from '../StaticBanner';

describe('StaticBanner', () => {
  it('Renders StaticBanner', () => {
    const shallowComponent = shallow(<StaticBanner />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
