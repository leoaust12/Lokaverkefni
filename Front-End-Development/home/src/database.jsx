// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA08aFHPYRPORJX_XrYKgo1_UWQbtiNYbU",
    authDomain: "chat-app-system-1f8e2.firebaseapp.com",
    projectId: "chat-app-system-1f8e2",
    storageBucket: "chat-app-system-1f8e2.appspot.com",
    messagingSenderId: "87304677264",
    appId: "1:87304677264:web:b451af61539174ded4f515",
    measurementId: "G-Q3MS8SPS8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);