// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwFDRmNBWtDmafJh1vPBrdo5ShFXxxAEE",
  authDomain: "react-notes-af8e5.firebaseapp.com",
  projectId: "react-notes-af8e5",
  storageBucket: "react-notes-af8e5.appspot.com",
  messagingSenderId: "398909003241",
  appId: "1:398909003241:web:67cc7503a68de08f4f6778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");
