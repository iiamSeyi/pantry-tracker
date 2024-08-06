
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7XkUEBI1epYbVisp6rY_kdRsyZgkhEoQ",
  authDomain: "project-2-694ad.firebaseapp.com",
  projectId: "project-2-694ad",
  storageBucket: "project-2-694ad.appspot.com",
  messagingSenderId: "832013271019",
  appId: "1:832013271019:web:010d90f4372690fda2a3ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };
