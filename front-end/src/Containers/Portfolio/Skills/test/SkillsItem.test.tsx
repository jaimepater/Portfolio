/**
 *
 * Tests for SkillsItem
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import SkillsItem from '../SkillsItem';

describe('SkillsItem', () => {
  it('Renders SkillsItem', () => {
    const shallowComponent = shallow(<SkillsItem />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
