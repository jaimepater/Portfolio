import firebase from 'firebase';
import { getFirebase } from './Firebase';

export const getProfileRef = async () => {
  await getFirebase();
  const databaseRef = firebase.database().ref();
  return databaseRef.child('portfolio');
};

export const getMessagesRef = async () => {
  await getFirebase();
  const databaseRef = firebase.database().ref();
  return databaseRef.child('messages');
};

export const getSolutionsRef = async () => {
  await getFirebase();
  const databaseRef = firebase.database().ref();
  return databaseRef.child('solutions');
};
