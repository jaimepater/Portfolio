import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCnPG61kuvxfde7qy55sLv4ySx8C9ubeH8',
  authDomain: 'portfolio-cc1ab.firebaseapp.com',
  databaseURL: 'https://portfolio-cc1ab.firebaseio.com',
  projectId: 'portfolio-cc1ab',
  storageBucket: 'portfolio-cc1ab.appspot.com',
  messagingSenderId: '932517523548',
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
firebase.auth().signInAnonymously();
export const profileRef = databaseRef.child('portfolio');
export const messagesRef = databaseRef.child('messages');

export default profileRef;
