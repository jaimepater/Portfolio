import { action, computed, observable } from 'mobx';


export interface ITestStore {
  name: string;
  greeting: string;
  setName(name: string):void
}


export default class TestStore implements ITestStore {
    @observable name = 'Jaime';

    @computed
    public get greeting() {
      return `hello${this.name}`;
    }

    @action.bound
    public setName(name: string): void {
      this.name = name;
    }
}
