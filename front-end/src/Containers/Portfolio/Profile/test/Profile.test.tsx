import React from "react";
import {shallow} from 'enzyme';
import Profile from "../Profile";



describe('Profile', () => {
  it('Renders Profile', () => {
    const shallowComponent = shallow(<Profile />);
    expect(shallowComponent).toMatchSnapshot();
  });
});