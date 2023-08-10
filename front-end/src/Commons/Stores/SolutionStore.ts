import { action, computed, observable } from 'mobx';
import moment from 'moment';
import { getSolutionsRef } from '../Firebase/database';
import { SolutionData } from '../../Definitions/definitions';

const NOW = 'Now';
const FORMAT = 'MMM YYYY';

export default class SolutionStore {
  @observable solutionData: SolutionData = {};

  @computed get name() {
    return this.solutionData?.profile?.name || '';
  }

  @computed get profiles() {
    return this.solutionData?.profile?.list || [];
  }

  @computed get solutionTitle() {
    return this.solutionData.services?.title;
  }

  @computed get solutionList() {
    return this.solutionData.services?.list;
  }

  @computed get contactTitle() {
    return this.solutionData.contact?.title;
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
    const ref = await getSolutionsRef();
    return ref.on('value', snapshot => {
      console.log('snapshot', snapshot.val());
      this.solutionData = snapshot.val();
    });
  }
}
