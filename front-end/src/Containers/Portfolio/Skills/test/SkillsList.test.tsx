/**
 *
 * Tests for SkillsList
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import SkillsList from '../SkillsList';

describe('SkillsList', () => {
  it('Renders SkillsList', () => {
    const shallowComponent = shallow(<SkillsList />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
