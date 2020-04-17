import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIAO8bU1tlWLx9IPOeWVzGaIyPyRdKHts",
    authDomain: "urldev-scriptbase.firebaseapp.com",
    databaseURL: "https://urldev-scriptbase.firebaseio.com",
    projectId: "urldev-scriptbase",
    storageBucket: "urldev-scriptbase.appspot.com",
    messagingSenderId: "976679482375",
    appId: "1:976679482375:web:1dc8c1b43bbbed38b366a2"
};

firebase.initializeApp(config);

//userAuth is coming from data that firebase stores.
//additionalData is for other data we would need
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

// export const movieInfo = () => {
//     let ref = firebase.database().ref
// }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;