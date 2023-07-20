// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_7U7WQ4KFpwgiWcjSgH6vMPuICWMI0w",
  authDomain: "parkit-9b7cf.firebaseapp.com",
  projectId: "parkit-9b7cf",
  storageBucket: "parkit-9b7cf.appspot.com",
  messagingSenderId: "306595467006",
  appId: "1:306595467006:web:8a32313d83e1614b931faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();

