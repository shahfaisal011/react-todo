// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNzU_qJPUdLeBvJv3Wkjd-apZmff4rY-Q",
  authDomain: "react-882d4.firebaseapp.com",
  projectId: "react-882d4",
  storageBucket: "react-882d4.appspot.com",
  messagingSenderId: "248126216227",
  appId: "1:248126216227:web:bef683052ea6a220493996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export auth and firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
