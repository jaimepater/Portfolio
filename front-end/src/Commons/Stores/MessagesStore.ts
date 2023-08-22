import moment from 'moment';
import { getMessagesRef } from '../Firebase/database';

export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export default class MessagesStore {
  public setMessage = async (data: MessageData, reset: Function) => {
    const ref = await getMessagesRef();
    const newChildRef = ref.push();
    reset();
    newChildRef.set({ ...data, createdAt: moment().format('DD/MM/YYYY HH:mm') });
  };
}
