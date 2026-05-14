// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz9PFs-oc2J2gboqzBa6wAC0kND3OHd44",
  authDomain: "preptalk-7d697.firebaseapp.com",
  projectId: "preptalk-7d697",
  storageBucket: "preptalk-7d697.firebasestorage.app",
  messagingSenderId: "1029201452525",
  appId: "1:1029201452525:web:d1660ca7154e4e8ba15be4",
  measurementId: "G-9M462V1W0Y"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);