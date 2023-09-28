import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhim40mpwPn4b23P5mSXEGWtzbDmFtavY",
  authDomain: "backend47165-33e5f.firebaseapp.com",
  projectId: "backend47165-33e5f",
  storageBucket: "backend47165-33e5f.appspot.com",
  messagingSenderId: "126079886282",
  appId: "1:126079886282:web:74b767f3dae8dd9964a533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)