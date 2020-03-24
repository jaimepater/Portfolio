/**
 *
 * Tests for BanerParellax
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import BannerParellax from "../BannerParellax";

describe('BanerParellax', () => {
  it('Renders BanerParellax', () => {
    const shallowComponent = shallow(<BannerParellax  title={"holA"}/>);
    expect(shallowComponent).toMatchSnapshot();
  });
});
