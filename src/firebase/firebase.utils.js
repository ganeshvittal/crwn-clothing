import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi_uf7DpM1EuBSwr-Z5H04s9Blb0f4sP0",
  authDomain: "crwn-db-8db42.firebaseapp.com",
  projectId: "crwn-db-8db42",
  storageBucket: "crwn-db-8db42.appspot.com",
  messagingSenderId: "988295345969",
  appId: "1:988295345969:web:4043e11385491047902210",
  measurementId: "G-KYJCB7GSPH",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;