/**
 *
 * Tests for ExperienceItem
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import ExperienceItem from "../ExperienceItem";

describe('ExperienceItem', () => {
  it('Renders ExperienceItem', () => {
    const shallowComponent = shallow(<ExperienceItem />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
