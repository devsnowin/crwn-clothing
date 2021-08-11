import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAhP5CJAJJEh2kiIBFCqoDQJEYxnjgeqkM",
    authDomain: "crwn-db-5ad1b.firebaseapp.com",
    projectId: "crwn-db-5ad1b",
    storageBucket: "crwn-db-5ad1b.appspot.com",
    messagingSenderId: "363979225439",
    appId: "1:363979225439:web:988fc8ab194c48d7b85eea"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
