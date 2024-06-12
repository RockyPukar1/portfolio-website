
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBsIDTzWfne1kSwnzqrVFQyGJeukT37lI4",
  authDomain: "portfolio-f291b.firebaseapp.com",
  databaseURL: "https://portfolio-f291b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-f291b",
  storageBucket: "portfolio-f291b.appspot.com",
  messagingSenderId: "1055590929425",
  appId: "1:1055590929425:web:b3c9b50020c80af8e44db0",
  measurementId: "G-BV7S6ZPFEC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);