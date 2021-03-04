import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBuJrzaHcSsAhvD9P5q0hxdrsU1HnVdQVs',
  authDomain: 'tinder-clone-fd657.firebaseapp.com',
  projectId: 'tinder-clone-fd657',
  storageBucket: 'tinder-clone-fd657.appspot.com',
  messagingSenderId: '786637257171',
  appId: '1:786637257171:web:051936b59eb3695ec35726',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;