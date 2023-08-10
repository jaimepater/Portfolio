import React from "react";
import {shallow} from 'enzyme';
import ProfileCard from "../ProfileCard";
import useStores from "../../../../Commons/Hooks/Stores";
import ProfileStoreMock from "../../../../Commons/__mocks__/Stores/ProfileStore";
import ProfileStore from "../../../../Commons/Stores/ProfileStore";





describe('ProfileCard', () => {
  it('Renders ProfileCard', () => {
    const shallowComponent = shallow(<ProfileCard />);
    expect(shallowComponent).toMatchSnapshot();
  });
});