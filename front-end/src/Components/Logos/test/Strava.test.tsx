/**
 *
 * Tests for Strava
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Strava from '../Strava';

describe('Strava', () => {
  it('Renders Strava', () => {
    const shallowComponent = shallow(<Strava />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
