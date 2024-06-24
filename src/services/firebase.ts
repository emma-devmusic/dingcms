// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1i9Dte6mGv7ZOjdcWwGyf6md1vgpyHKc",
    authDomain: "cms-emma.firebaseapp.com",
    projectId: "cms-emma",
    storageBucket: "cms-emma.appspot.com",
    messagingSenderId: "484258354616",
    appId: "1:484258354616:web:75fcf09fb5f432be34ab4d",
    measurementId: "G-XY7C0PZ3SR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);