import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkbtgmrqbHNtOXJzuQuSKRl2AK7jjUGQw",
    authDomain: "chit-chat-app-56d0e.firebaseapp.com",
    projectId: "chit-chat-app-56d0e",
    storageBucket: "chit-chat-app-56d0e.appspot.com",
    messagingSenderId: "780498867118",
    appId: "1:780498867118:web:3659a48e749361432a6e3f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app