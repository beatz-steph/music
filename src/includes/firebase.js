import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE2PEg55jS0UodQfgRBmysEnQCdDE11kM",
  authDomain: "music-30e9e.firebaseapp.com",
  projectId: "music-30e9e",
  storageBucket: "music-30e9e.appspot.com",
  appId: "1:216496458993:web:e34dac3006c6ef00312d50",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
