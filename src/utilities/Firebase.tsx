import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGKwLs1GcGuGsMDMc6e5ObLLMWvgw17xQ",
  authDomain: "izworkout.firebaseapp.com",
  databaseURL: "https://izworkout.firebaseio.com",
  projectId: "izworkout",
  storageBucket: "izworkout.appspot.com",
  messagingSenderId: "335358269966",
  appId: "1:335358269966:web:c4b24ee7f4a06282c03a5f",
  measurementId: "G-YD6W17VTRN",
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = (pass: string, stayLogged: Boolean) => {
  if (stayLogged) {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return auth.signInWithEmailAndPassword("ezworkout@ezworkout.ez", pass);
      })
      .catch((e) => {
        console.log(e.message);
      });
  } else {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.NONE)
      .then(() => {
        return auth.signInWithEmailAndPassword("ezworkout@ezworkout.ez", pass);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }
};
export const logoutGoogle = () => {
  auth.signOut();
};
