// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZGG2ZecRl6vL4X0OkxQG9YQxMhVOLA9I",
  authDomain: "netflix-gpt-a2c4a.firebaseapp.com",
  projectId: "netflix-gpt-a2c4a",
  storageBucket: "netflix-gpt-a2c4a.firebasestorage.app",
  messagingSenderId: "288574947258",
  appId: "1:288574947258:web:74814349ace486bc0c6783",
  measurementId: "G-FSW4TRD9DC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();