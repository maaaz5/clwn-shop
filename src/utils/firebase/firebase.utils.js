import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWJo-VDYZ0LSz1Wf4IoJq0yrSKt3gK6g",
  authDomain: "crown-clothing-db-f920b.firebaseapp.com",
  projectId: "crown-clothing-db-f920b",
  storageBucket: "crown-clothing-db-f920b.appspot.com",
  messagingSenderId: "512801939451",
  appId: "1:512801939451:web:dae8ea5bcef335c864f55e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//create user with email and password
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

//sign in user  with email and password
export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

//db

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user doesn't exist

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("There was an error setting user ", error?.message);
    }
  }

  //return the user ref

  return userDocRef;
};
