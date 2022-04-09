import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panel-3cc3b.firebaseapp.com",
  projectId: "react-admin-panel-3cc3b",
  storageBucket: "react-admin-panel-3cc3b.appspot.com",
  messagingSenderId: "379829323578",
  appId: "1:379829323578:web:15244f97aa91f9722d7203",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
export const storage = getStorage(app)
