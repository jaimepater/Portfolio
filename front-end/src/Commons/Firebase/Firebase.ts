import firebase from 'firebase';




const config = {
  apiKey: 'AIzaSyCnPG61kuvxfde7qy55sLv4ySx8C9ubeH8',
  authDomain: 'portfolio-cc1ab.firebaseapp.com',
  databaseURL: 'https://portfolio-cc1ab.firebaseio.com',
  projectId: 'portfolio-cc1ab',
  storageBucket: 'portfolio-cc1ab.appspot.com',
  messagingSenderId: '932517523548',
};

console.log(config);

firebase.initializeApp(config);


const databaseRef = firebase.database().ref();
export const profileRef = databaseRef.child('portfolio');
