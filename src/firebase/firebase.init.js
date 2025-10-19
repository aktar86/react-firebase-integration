//Do not share in public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfjRA5lNGMqX95n3bpyatB2JyuT2bHc4s",
  authDomain: "react-firebase-auth-inti-37190.firebaseapp.com",
  projectId: "react-firebase-auth-inti-37190",
  storageBucket: "react-firebase-auth-inti-37190.firebasestorage.app",
  messagingSenderId: "316923663557",
  appId: "1:316923663557:web:939f7ed0455931c709ccac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);