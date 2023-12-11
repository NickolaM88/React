import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVKQKPwRBn6Pp13-W1mOb92oRDsHIaN_k",
  authDomain: "typeme-9024c.firebaseapp.com",
  projectId: "typeme-9024c",
  storageBucket: "typeme-9024c.appspot.com",
  messagingSenderId: "704298739565",
  appId: "1:704298739565:web:af8d6a265636b738a2dc64"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();