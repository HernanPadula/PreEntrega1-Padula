// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA8Qd4DOBJKqbvE7ujo7zXlo_VY5HyXEM",
    authDomain: "exsherstore.firebaseapp.com",
    projectId: "exsherstore",
    storageBucket: "exsherstore.appspot.com",
    messagingSenderId: "822554058875",
    appId: "1:822554058875:web:789fa615e8e98e106d42de",
    measurementId: "G-0XGKZJEKQL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);