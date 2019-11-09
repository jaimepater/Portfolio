import React from "react";
import { shallow } from 'enzyme';
import Avatar from "../Avatar";

describe('Avatar', () => {
  it('Renders Avatar', () => {
    const shallowComponent = shallow(<Avatar />);
    expect(shallowComponent).toMatchSnapshot();
  });
});