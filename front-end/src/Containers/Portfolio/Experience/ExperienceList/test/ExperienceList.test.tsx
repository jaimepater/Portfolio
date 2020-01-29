/**
 *
 * Tests for ExperienceList
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import ExperienceList from "../ExperienceList";

describe('ExperienceList', () => {
  it('Renders ExperienceList', () => {
    const shallowComponent = shallow(<ExperienceList />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
