/**
 *
 * Tests for ProjectItem
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ProjectItem from '../ProjectItem';

describe('ProjectItem', () => {
  it('Renders ProjectItem', () => {
    const shallowComponent = shallow(<ProjectItem />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
