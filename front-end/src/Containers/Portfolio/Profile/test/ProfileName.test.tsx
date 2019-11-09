import React from "react";
import {mount, shallow} from 'enzyme';
import ProfileName, {Name} from "../ProfileName";
import {Theme} from "../../../../Theme/Theme";


describe('ProfileName', () => {
  it('Renders ProfileName', () => {
    const shallowComponent = shallow(<ProfileName name="Jaime Paternina" />);
    expect(shallowComponent).toMatchSnapshot();
  });
  it('Renders Name', () => {
    const shallowComponent = shallow(<Name theme={Theme}/>);
    expect(shallowComponent).toMatchSnapshot();
  });
});