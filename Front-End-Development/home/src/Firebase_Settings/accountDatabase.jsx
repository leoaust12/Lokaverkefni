// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA08aFHPYRPORJX_XrYKgo1_UWQbtiNYbU",
    authDomain: "chat-app-system-1f8e2.firebaseapp.com",
    projectId: "chat-app-system-1f8e2",
    storageBucket: "chat-app-system-1f8e2.appspot.com",
    messagingSenderId: "87304677264",
    appId: "1:87304677264:web:adea97594c5aec62d4f515",
    measurementId: "G-C766C71SRF"
};

function app() {
    if (!firebase.apps.length) {
        const App = firebase.initializeApp(firebaseConfig)
    }
}
// Initialize Firebase
export const auth = getAuth(app);