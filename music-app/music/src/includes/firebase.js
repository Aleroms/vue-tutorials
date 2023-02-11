import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
const storage = firebase.storage();
const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");
export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
