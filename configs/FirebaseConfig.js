// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-apps-9ad5a.firebaseapp.com",
  projectId: "react-apps-9ad5a",
  storageBucket: "react-apps-9ad5a.firebasestorage.app",
  messagingSenderId: "181082124657",
  appId: "1:181082124657:web:97c7c2d3cbf378e2d086d0",
  measurementId: "G-SCJ4D44TSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);