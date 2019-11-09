import React from "react";
import {shallow} from 'enzyme';
import ProfileItem, {TextProfile} from "../ProfileItem";
import {Theme} from "../../../../Theme/Theme";


describe('ProfileItem', () => {
  it('Renders ProfileItem', () => {
    const shallowComponent = shallow(<ProfileItem  profile="React" time={5000}/>);
    expect(shallowComponent).toMatchSnapshot();
  });
  it('Renders TextProfile', () => {
    const shallowComponent = shallow(<TextProfile theme={Theme} time="5s"/>);
    expect(shallowComponent).toMatchSnapshot();
  });
});