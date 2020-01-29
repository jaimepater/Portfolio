/**
 *
 * Tests for Bulleted
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Bulleted from "../Bulleted";

describe('Bulleted', () => {
  it('Renders Bulleted', () => {
    const shallowComponent = shallow(<Bulleted />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
