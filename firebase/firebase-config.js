// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// REPLACE WITH YOUR ACTUAL FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBFPSWBAkC6xDZ-0YFJ-cRfntqaY-ukTxc",
  authDomain: "wishgamestore.firebaseapp.com",
  projectId: "wishgamestore",
  storageBucket: "wishgamestore.firebasestorage.app",
  messagingSenderId: "756027319608",
  appId: "1:756027319608:web:f495a2bda1c323e0448dcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
