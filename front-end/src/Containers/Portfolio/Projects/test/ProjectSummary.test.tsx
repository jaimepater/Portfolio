/**
 *
 * Tests for ProjectSummary
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ProjectSummary from '../ProjectSummary';

describe('ProjectSummary', () => {
  it('Renders ProjectSummary', () => {
    const shallowComponent = shallow(<ProjectSummary />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
