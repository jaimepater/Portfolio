import React from "react";
import { shallow } from 'enzyme';
import Portfolio from "../Portfolio";


describe('Portfolio', () => {
    it('Renders Header', () => {
        const shallowComponent = shallow(<Portfolio  />);
        expect(shallowComponent).toMatchSnapshot();
    });
});