import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD5xZskvAePi59sYqhwmGklVklAAflAhlg",
  authDomain: "e-project-db.firebaseapp.com",
  databaseURL: "https://e-project-db.firebaseio.com",
  projectId: "e-project-db",
  storageBucket: "e-project-db.appspot.com",
  messagingSenderId: "416770275462",
  appId: "1:416770275462:web:3d96562eac57018f293907",
  measurementId: "G-BYWC3R6F2V"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
