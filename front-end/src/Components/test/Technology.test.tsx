/**
 *
 * Tests for Technology
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Technology from "../Technology";

describe('Technology', () => {
  it('Renders Technology', () => {
    const shallowComponent = shallow(<Technology />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
