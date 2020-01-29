import {action, computed, observable} from 'mobx';
import moment, {Moment} from "moment";
import {profileRef} from '../Firebase/Firebase';

const NOW = "Now";
const FORMAT = "MMM YYYY";


export interface IProfileStore {
  profileData: IPortfolioData;
  getProfileData: any;
  fullName: any;
  experienceTitle: any;
  profiles: any
  experienceList: any
}

export interface IPortfolioData {
  profile?: {
    firstName: string
    lastName: string,
    list: Array<string>
  },
  experience?: {
    title: string
    list: Array<IExperienceList>
  },
  skills?: {
    title: string,
    list: Array<ISkill>
  }
}

export  interface ISkill {
  id: string,
  name: string,
  score: string
}

export interface IExperienceList {
  title: string
  id: string
  color: string,
  responsibilities: Array<string>,
  from: {
    display: string,
    date: Moment
  }
  to: {
    display: string,
    date: Moment
  }
  description: string
  technologies: Array<string>


}


export default class ProfileStore implements IProfileStore {
    @observable profileData: IPortfolioData = {};

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

  @computed get skillTitle() {
      let experience;
      if (this.profileData.skills) {
        experience = this.profileData.skills.title;
      }
      return experience;
    }

  @computed get skillsList() {
    let experience;
    if (this.profileData.skills) {
      experience = this.profileData.skills.list;
    }
    return experience;
  }

    @computed get experienceList() {
    let experienceList;
    if (this.profileData.experience) {
      experienceList = this.profileData.experience.list.map((item) => ({
        ...item,
        from: this.getDate(item.from),
        to: this.getDate(item.to)
      }));
    }
    return experienceList;
  }

    getDate = (stringDate: any) => {
      if (stringDate === NOW) {
        return {date: moment(), display: NOW};
      }
      return {date: moment(stringDate), display: moment(stringDate).format(FORMAT)};
    };

    @action
    public getProfileData() {
      return profileRef.on('value', snapshot => {
        this.profileData = snapshot.val();
        console.log(snapshot.val());
      });
    }
}
