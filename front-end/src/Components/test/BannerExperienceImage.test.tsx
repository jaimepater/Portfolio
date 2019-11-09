/**
 *
 * Tests for BanaerEXperienceImage
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import BannerExperienceImage from "../BannerExperienceImage";

describe('BanaerEXperienceImage', () => {
  it('Renders BanaerEXperienceImage', () => {
    const shallowComponent = shallow(<BannerExperienceImage />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
