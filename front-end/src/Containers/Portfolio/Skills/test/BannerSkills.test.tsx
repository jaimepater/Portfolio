/**
 *
 * Tests for BannerSkills
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import BannerSkills from "../BannerSkills";

describe('BannerSkills', () => {
  it('Renders BannerSkills', () => {
    const shallowComponent = shallow(<BannerSkills />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
