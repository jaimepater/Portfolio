import React from "react";
import { shallow } from 'enzyme';
import ContentGradient from "../ContentGradient";

describe('ContentGradient', () => {
  it('Renders ContentGradient', () => {
    const shallowComponent = shallow(<ContentGradient />);
    expect(shallowComponent).toMatchSnapshot();
  });
});