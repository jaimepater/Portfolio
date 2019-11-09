import React from "react";
import { shallow } from 'enzyme';
import Colombia from "../Colombia";


describe('Colombia', () => {
  it('Renders Colombia', () => {
    const shallowComponent = shallow(<Colombia />);
    expect(shallowComponent).toMatchSnapshot();
  });
});