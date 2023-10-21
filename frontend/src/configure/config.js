// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGzKJU4uAZ92gkZxKwOGZMxYpmnDuCBLc",
  authDomain: "webledger-61d96.firebaseapp.com",
  projectId: "webledger-61d96",
  storageBucket: "webledger-61d96.appspot.com",
  messagingSenderId: "583521512284",
  appId: "1:583521512284:web:2727f92b29e06fcefb6f99",
  measurementId: "G-H51YYTE0XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);