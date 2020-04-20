import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
require("dotenv").config();

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "reactmarkets.firebaseapp.com",
  databaseURL: "https://reactmarkets.firebaseio.com",
  projectId: "reactmarkets",
  storageBucket: "reactmarkets.appspot.com",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    //if theres no userAuth, exit from statement
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snapshot will check if user exists
    const snapShot = await userRef.get();

    //this will create a new user in the database
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
