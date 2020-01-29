/**
 *
 * Tests for ExperienceCard
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import ExperienceCard from "../ExperienceCard";

describe('ExperienceCard', () => {
  it('Renders ExperienceCard', () => {
    const shallowComponent = shallow(<ExperienceCard />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
