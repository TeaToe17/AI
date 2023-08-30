// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCD7OsoCdTxyg1-ArIiRi11ae6wuUR0aPs",
  authDomain: "summer-project-b1911.firebaseapp.com",
  projectId: "summer-project-b1911",
  storageBucket: "summer-project-b1911.appspot.com",
  messagingSenderId: "692809737376",
  appId: "1:692809737376:web:d5250eaacf012ec85815c5",
  measurementId: "G-5LJM5CL2JW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
