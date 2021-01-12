import { getMessagesRef } from '../Firebase/database';

export interface IMessageStore {
  setMessage: any;
}

export interface IMessageData {
  name: string;
  email: string;
  message: string;
}

export default class MessagesStore implements IMessageStore {
  // eslint-disable-next-line class-methods-use-this
  public async setMessage(data: IMessageData, reset: any) {
    const ref = await getMessagesRef();
    const newChildRef = ref.push();
    reset();
    newChildRef.set(data);
  }
}
