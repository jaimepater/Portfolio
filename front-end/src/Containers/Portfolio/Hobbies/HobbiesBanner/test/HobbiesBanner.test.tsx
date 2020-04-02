/**
 *
 * Tests for HobbiesBanner
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import HobbiesBanner from '../HobbiesBanner';

describe('HobbiesBanner', () => {
  it('Renders HobbiesBanner', () => {
    const shallowComponent = shallow(<HobbiesBanner />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
