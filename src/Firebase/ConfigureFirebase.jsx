import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const apiKey = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "general-purpose-of-firebase.firebaseapp.com",
  projectId: "general-purpose-of-firebase",
  storageBucket: "general-purpose-of-firebase.appspot.com",
  messagingSenderId: "1073527730037",
  appId: "1:1073527730037:web:b14269725c70de1118ad3c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
