import React from "react";
import { shallow } from 'enzyme';
import Header from "../Header";


describe('Header', () => {
  it('Renders Header', () => {
    const shallowComponent = shallow(<Header  />);
    expect(shallowComponent).toMatchSnapshot();
  });
});