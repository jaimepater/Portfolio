/**
 *
 * Tests for Cloud
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

import Cloud from '../Cloud';

describe('Cloud', () => {
  it('Renders Cloud', () => {
    const shallowComponent = shallow(<Cloud />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
