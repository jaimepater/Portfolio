/**
 *
 * Tests for HobbiesItem
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import HobbiesItem from '../HobbiesItem';

describe('HobbiesItem', () => {
  it('Renders HobbiesItem', () => {
    const shallowComponent = shallow(<HobbiesItem />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
