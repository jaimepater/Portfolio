import React from "react";
import { shallow } from 'enzyme';
import H1 from "../H1";
import {Theme} from "../../Theme/Theme";

describe('H1', () => {
  it('Renders H1', () => {
    const shallowComponent = shallow(<H1 theme={Theme} />);
    expect(shallowComponent).toMatchSnapshot();
  });
});