import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRqITQzswfRlUZJn2GPRuDOpswSpR9oL0",
  authDomain: "i-commercedb.firebaseapp.com",
  databaseURL: "https://i-commercedb.firebaseio.com",
  projectId: "i-commercedb",
  storageBucket: "i-commercedb.appspot.com",
  messagingSenderId: "1059489618181",
  appId: "1:1059489618181:web:0d1a96c1496a42ef51bf6c",
  measurementId: "G-X1J2J9DJT2"
};

export const createUserProfile = async (userAuth, additionalUserInfo) => {
  if(!userAuth) return;

  const userRef = firebaseStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalUserInfo
      });
    } catch (e) {
      console.log(`error create user`, e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

export default firebase;