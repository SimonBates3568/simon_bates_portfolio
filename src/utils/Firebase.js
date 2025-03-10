// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA18QjeSqLv1havGlfT3C9r8YyM402Y6FI",
  authDomain: "winc-fa01e.firebaseapp.com",
  projectId: "winc-fa01e",
  storageBucket: "winc-fa01e.firebasestorage.app",
  messagingSenderId: "877430444152",
  appId: "1:877430444152:web:e33d51f94c1026021d5d8d",
  measurementId: "G-WW5T7E05B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
