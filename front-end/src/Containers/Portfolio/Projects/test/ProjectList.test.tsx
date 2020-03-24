/**
 *
 * Tests for ProjectList
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ProjectList from '../ProjectList';

describe('ProjectList', () => {
  it('Renders ProjectList', () => {
    const shallowComponent = shallow(<ProjectList />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
