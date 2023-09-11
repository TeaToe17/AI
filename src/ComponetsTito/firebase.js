// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiZ2N4DIE-NTIPPBCXMt0_6LSpuzEyM3U",
  authDomain: "authenticated-login-22f05.firebaseapp.com",
  projectId: "authenticated-login-22f05",
  storageBucket: "authenticated-login-22f05.appspot.com",
  messagingSenderId: "730751476806",
  appId: "1:730751476806:web:2b6adb9e52528631e05647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);