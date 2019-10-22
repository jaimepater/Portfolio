import { action, observable } from 'mobx';
import { profileRef } from '../Firebase/Firebase';


export interface IProfileStore {
  profileData: any;
  getProfileData: any;
  setTest : any;
}


export default class ProfileStore implements IProfileStore {
    @observable profileData = {};

    @action
    public getProfileData() {
      return profileRef.on('value', snapshot => {
        this.profileData = snapshot.val();
          console.log('data', snapshot.val())
      });
    }

    @action
    public setTest() {
        console.log('set')
      profileRef.push().set({ protfolio: 'prueba' });
    }
}
