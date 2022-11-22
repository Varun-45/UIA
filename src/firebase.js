// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzi-YR2MDR0XXaZ-2Qg6GCkwpK62uu1sA",
    authDomain: "happy-score-b4843.firebaseapp.com",
    databaseURL: "https://happy-score-b4843-default-rtdb.firebaseio.com",
    projectId: "happy-score-b4843",
    storageBucket: "happy-score-b4843.appspot.com",
    messagingSenderId: "264392332496",
    appId: "1:264392332496:web:92eafc3204a5f4eb837ad5",
    measurementId: "G-NCNHKC2CZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
export { db, storage }   