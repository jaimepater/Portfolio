/**
 *
 * Tests for HobbiesList
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import HobbiesList from '../HobbiesList';

describe('HobbiesList', () => {
  it('Renders HobbiesList', () => {
    const shallowComponent = shallow(<HobbiesList />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
