import { action, computed, observable } from 'mobx';
import moment, { Moment } from 'moment';
import { profileRef } from '../Firebase/Firebase';

const NOW = 'Now';
const FORMAT = 'MMM YYYY';

export interface IProfileStore {
  profileData: IPortfolioData;
  getProfileData: any;
  fullName: any;
  experienceTitle: any;
  profiles: any;
  experienceList: any;
}

export interface IPortfolioData {
  profile?: {
    firstName: string;
    lastName: string;
    github: string;
    strava: string;
    mail: string;
    linkedin: string;
    list: Array<string>;
  };
  experience?: {
    title: string;
    list: Array<IExperienceList>;
  };
  skills?: {
    title: string;
    list: Array<ISkill>;
  };
  projects?: {
    title: string;
    list: Array<IProject>;
  };
  hobbies?: {
    title: string;
    list: Array<Hobbie>;
  };
}

export interface ISkill {
  id: string;
  name: string;
  score: string;
}

export interface IExperienceList {
  title: string;
  id: string;
  color: string;
  responsibilities: Array<string>;
  from: {
    display: string;
    date: Moment;
  };
  to: {
    display: string;
    date: Moment;
  };
  description: string;
  technologies: Array<string>;
}

export interface IProject {
  title: string;
  color: string;
  description: string;
  github: string;
  technologies: Array<string>;
  mainTechnologies: Array<string>;
}

export interface Hobbie {
  title: string;
  color: string;
  logo: string;
  description: string;
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

  @computed get profile() {
    let profile;
    if (this.profileData.profile) {
      profile = this.profileData.profile;
    }
    return profile;
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

  @computed get projectsTitle() {
    let projects;
    if (this.profileData.projects) {
      projects = this.profileData.projects.title;
    }
    return projects;
  }

  @computed get projectsList() {
    let projects;
    if (this.profileData.projects) {
      projects = this.profileData.projects.list;
    }
    return projects;
  }

  @computed get hobbiesTitle() {
    let projects;
    if (this.profileData.hobbies) {
      projects = this.profileData.hobbies.title;
    }
    return projects;
  }

  @computed get hobbiesList() {
    let projects;
    if (this.profileData.hobbies) {
      projects = this.profileData.hobbies.list;
    }
    return projects;
  }

  @computed get experienceList() {
    let experienceList;
    if (this.profileData.experience) {
      experienceList = this.profileData.experience.list.map(item => ({
        ...item,
        from: this.getDate(item.from),
        to: this.getDate(item.to),
      }));
    }
    return experienceList;
  }

  getDate = (stringDate: any) => {
    if (stringDate === NOW) {
      return { date: moment(), display: NOW };
    }
    return {
      date: moment(stringDate),
      display: moment(stringDate).format(FORMAT),
    };
  };

  @action
  public getProfileData() {
    return profileRef.on('value', snapshot => {
      this.profileData = snapshot.val();
    });
  }
}
