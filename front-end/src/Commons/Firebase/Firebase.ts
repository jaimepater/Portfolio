import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const fb = firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
firebase.auth().signInAnonymously();
export const profileRef = databaseRef.child('portfolio');
export const messagesRef = databaseRef.child('messages');
export const getFirebase = async () => {
  await firebase.auth().signInAnonymously();
  return fb;
};
export default profileRef;
