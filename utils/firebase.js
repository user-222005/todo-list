import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAoIJilN07M1iVrh3xCV2K3u1u9Ezb9twk",
    authDomain: "todolist-c559a.firebaseapp.com",
    projectId: "todolist-c559a",
    storageBucket: "todolist-c559a.appspot.com",
    messagingSenderId: "1049334835769",
    appId: "1:1049334835769:web:b1aac3922999b256213be8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);