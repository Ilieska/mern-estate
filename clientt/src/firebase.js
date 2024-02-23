// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "raccestate.firebaseapp.com",
  projectId: "raccestate",
  storageBucket: "raccestate.appspot.com",
  messagingSenderId: "1025312079137",
  appId: "1:1025312079137:web:013eb3c1e38af495a7d260"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);