/**
 *
 * Tests for Experience
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Experience from "../Experience";

describe('Experience', () => {
  it('Renders Experience', () => {
    const shallowComponent = shallow(<Experience />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
