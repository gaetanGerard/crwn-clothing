import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiQ-NNilY7RrN1Gv8tIc26CoBI3Ci2C9g",
    authDomain: "crown-db-25729.firebaseapp.com",
    databaseURL: "https://crown-db-25729.firebaseio.com",
    projectId: "crown-db-25729",
    storageBucket: "",
    messagingSenderId: "985431013300",
    appId: "1:985431013300:web:5d2e46d87fb5de0414e4e1",
    measurementId: "G-08BVTVVR4C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

