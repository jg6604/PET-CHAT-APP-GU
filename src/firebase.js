import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //apiKey: "AIzaSyBpYg-KAzwWGaT3g7J8smjnNqP8N8Nj8vQ",
  //authDomain: "penpalmagicapp.firebaseapp.com",
  //projectId: "penpalmagicapp",
  //storageBucket: "penpalmagicapp.appspot.com",
  //messagingSenderId: "45289060638",
  //appId: "1:45289060638:web:33121bc47d40ceef83f10f",
  //measurementId: "G-FG3MPZ8JV6"

  apiKey: "AIzaSyB2yoOnhtykUss83sWeCgll29DvzZ2gDC0",
  authDomain: "chat3-4186a.firebaseapp.com",
  projectId: "chat3-4186a",
  storageBucket: "chat3-4186a.appspot.com",
  messagingSenderId: "733814481724",
  appId: "1:733814481724:web:16d8410e0fdeaf5eb9f439",
  measurementId: "G-B3FVEHY1QY"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
