import React from "react";
import {mount, shallow} from 'enzyme';
import AvatarContainer, {AvatarBorder} from "../AvatarContainer";
import {Theme} from "../../../../Theme/Theme";


describe('AvatarContainer', () => {
  it('Renders AvatarContainer', () => {
    const shallowComponent = shallow(<AvatarContainer/>);
    expect(shallowComponent).toMatchSnapshot();
  });
  it('Renders AvatarBorder', () => {
    const shallowComponent = shallow(<AvatarBorder theme={Theme}/>);
    expect(shallowComponent).toMatchSnapshot();
  });
});