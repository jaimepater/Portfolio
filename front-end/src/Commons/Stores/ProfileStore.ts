import { action, computed, observable } from 'mobx';
import { profileRef } from '../Firebase/Firebase';


export interface IProfileStore {
  profileData: IPortfolioData;
  getProfileData: any;
  fullName: any;
  experienceTitle: any;
  profiles: any
}

export interface IPortfolioData {
  profile?: {
    firstName: string
    lastName: string,
    list: Array<string>
  },
  experience? : {
    title: string
    list: Array<string>
  }
}

export default class ProfileStore implements IProfileStore {
    @observable profileData : IPortfolioData = {} ;

    @computed get fullName() {
      let name = '';
      if (this.profileData.profile) {
        name = `${this.profileData!.profile!.firstName} ${this.profileData!.profile!.lastName}`;
      }
      return name;
    }

    @computed get profiles() {
      let profiles: Array<string> = [];
      if (this.profileData.profile) {
        profiles = this.profileData.profile.list;
      }
      return profiles;
    }

    @computed get experienceTitle() {
      let experience;
      if (this.profileData.experience) {
        experience = this.profileData.experience.title;
      }
      return experience;
    }

    @action
    public getProfileData() {
      return profileRef.on('value', snapshot => {
        this.profileData = snapshot.val();
        console.log(snapshot.val());
      });
    }
}
