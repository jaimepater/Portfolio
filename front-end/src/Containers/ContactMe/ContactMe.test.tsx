/**
 *
 * Tests for ContactMe
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ContactMe from './ContactMe';

describe('ContactMe', () => {
  it('Renders ContactMe', () => {
    const shallowComponent = shallow(<ContactMe />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
