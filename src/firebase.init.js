// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7-jOsGhRSgHO0wSIuBX1a490vs-ez37o",
    authDomain: "ema-john-simple-d7e54.firebaseapp.com",
    projectId: "ema-john-simple-d7e54",
    storageBucket: "ema-john-simple-d7e54.appspot.com",
    messagingSenderId: "582621095635",
    appId: "1:582621095635:web:f7b26e3b54b09b3ff9d626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;