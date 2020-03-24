/**
 *
 * Tests for ProjectDetails
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import ProjectDetails from '../ProjectDetails';

describe('ProjectDetails', () => {
  it('Renders ProjectDetails', () => {
    const shallowComponent = shallow(<ProjectDetails />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
