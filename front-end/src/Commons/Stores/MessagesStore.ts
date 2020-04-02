import { messagesRef } from '../Firebase/Firebase';

export interface IMessageStore {
  setMessage: any;
}

export interface IMessageData {
  name: string;
  email: string;
  message: string;
}

export default class MessagesStore implements IMessageStore {
  public setMessage(data: IMessageData, reset: any) {
    const newChildRef = messagesRef.push();
    reset();
    newChildRef.set(data);
  }
}
