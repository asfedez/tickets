import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyRnc8ayYUwdS172Wdeb1XweIwWKj1NgE",
  authDomain: "tickets-61b54.firebaseapp.com",
  projectId: "tickets-61b54",
  storageBucket: "tickets-61b54.appspot.com",
  messagingSenderId: "598309039393",
  appId: "1:598309039393:web:5f732f8018d23eb4206260",
  measurementId: "G-MFNHGFCP4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();