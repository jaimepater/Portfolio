import React from "react";
import { shallow } from 'enzyme';
import Logo from "../Logo";


describe('Logo', () => {
  it('Renders Logo', () => {
    const shallowComponent = shallow(<Logo  />);
    expect(shallowComponent).toMatchSnapshot();
  });
});