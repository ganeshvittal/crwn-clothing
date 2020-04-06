import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA95oF6jc5L2YOAoHhDK2yWlAd0fws7c_8',
  authDomain: 'crwn-db-6a816.firebaseapp.com',
  databaseURL: 'https://crwn-db-6a816.firebaseio.com',
  projectId: 'crwn-db-6a816',
  storageBucket: 'crwn-db-6a816.appspot.com',
  messagingSenderId: '638256889799',
  appId: '1:638256889799:web:608d6faecf0f8751c9e3e2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
