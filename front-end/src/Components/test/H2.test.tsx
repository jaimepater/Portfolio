import React from "react";
import { shallow } from 'enzyme';
import H2 from "../H2";
import {Theme} from "../../Theme/Theme";

describe('H2', () => {
  it('Renders H2', () => {
    const shallowComponent = shallow(<H2 theme={Theme} />);
    expect(shallowComponent).toMatchSnapshot();
  });
});