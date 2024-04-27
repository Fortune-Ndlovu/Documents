import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW9vW0cGg82PvOLRoYWpImrfMd8pAwHyM",
  authDomain: "reactdesign-ad1d3.firebaseapp.com",
  projectId: "reactdesign-ad1d3",
  storageBucket: "reactdesign-ad1d3.appspot.com",
  messagingSenderId: "35317397847",
  appId: "1:35317397847:web:383b412ea3f63c80fea612",
  measurementId: "G-EJBPRM0Z7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const getCurrentUserId = () => { 
    const userId = auth.currentUser;
    return userId ? userId.uid : null;
};

export { app, db, auth, storage, getCurrentUserId };