/**
 *
 * Tests for Skills
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Skills from "../Skills";

describe('Skills', () => {
  it('Renders Skills', () => {
    const shallowComponent = shallow(<Skills />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
