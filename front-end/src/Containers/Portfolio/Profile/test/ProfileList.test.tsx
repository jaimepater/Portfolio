import React from "react";
import { shallow} from 'enzyme';
import ProfileList from "../ProfileList";
import portfolioData from "../../../../Commons/__mocks__/Stores/profileData.json";
const  list = portfolioData.profile.list


describe('ProfileName', () => {
  it('Renders ProfileName', () => {
    const shallowComponent = shallow(<ProfileList profiles={list} time={5000} />);
    expect(shallowComponent).toMatchSnapshot();
  });
});