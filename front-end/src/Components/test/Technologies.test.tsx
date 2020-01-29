/**
 *
 * Tests for Technologies
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';


import Technologies from "../Technologies";

describe('Technologies', () => {
it('Renders Technologies', () => {
const shallowComponent = shallow(<Technologies />);
expect(shallowComponent).toMatchSnapshot();
});
});
