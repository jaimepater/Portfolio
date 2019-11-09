import {IPortfolioData, IProfileStore} from "../../Stores/ProfileStore";
import portfolioData from "./profileData.json";
// / <reference types="react-scripts" />

export default class ProfileStoreMock implements IProfileStore {
  profileData : IPortfolioData = portfolioData ;

  fullName: jest.Mocked<any>;

  profiles: jest.Mocked<any>;

  getProfileData: jest.Mocked<any>;

  experienceTitle: jest.Mocked<any>;
}
