/**
 *
 * Tests for Projects
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Projects from '../Projects';

describe('Projects', () => {
  it('Renders Projects', () => {
    const shallowComponent = shallow(<Projects />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
