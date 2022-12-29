import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzDGdeFIyvxjX01XhEGViUjEqU0AI6Lc",
  authDomain: "music-9362a.firebaseapp.com",
  projectId: "music-9362a",
  storageBucket: "music-9362a.appspot.com",
  appId: "1:71184520640:web:d51b17b4cf44fc28e26425",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection("users");
export { auth, db, usersCollection };
