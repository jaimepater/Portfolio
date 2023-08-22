// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, computed, observable } from 'mobx';
import moment from 'moment';
import { getProfileRef } from '../Firebase/database';
import { PortfolioData } from '../../Definitions/definitions';

const NOW = 'Now';
const FORMAT = 'MMM YYYY';

export default class ProfileStore {
  @observable profileData: PortfolioData = {};

  @computed get fullName() {
    let name = '';
    if (this.profileData.profile) {
      name = `${this.profileData?.profile?.firstName} ${this.profileData?.profile?.lastName}`;
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
        from: this.getDate(item.from as string),
        to: this.getDate(item.to as string),
      }));
    }
    return experienceList;
  }

  getDate = (stringDate: string) => {
    if (stringDate === NOW) {
      return { date: moment(), display: NOW };
    }
    return {
      date: moment(stringDate),
      display: moment(stringDate).format(FORMAT),
    };
  };

  @action
  public async getProfileData() {
    const ref = await getProfileRef();
    return ref.on('value', snapshot => {
      this.profileData = snapshot.val();
    });
  }
}
