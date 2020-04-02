/**
 *
 * Tests for Footer
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('Footer', () => {
  it('Renders Footer', () => {
    const shallowComponent = shallow(<Footer />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
