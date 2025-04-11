// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "urgentcash-21e87.firebaseapp.com",
  projectId: "urgentcash-21e87",
  storageBucket: "urgentcash-21e87.firebasestorage.app",
  messagingSenderId: "894649275631",
  appId: "1:894649275631:web:01c5cc211b21b7977ef71a"
};

// Initialize Firebase
const app = getApps ().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage}