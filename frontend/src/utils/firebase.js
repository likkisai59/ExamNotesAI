// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-e6e8e.firebaseapp.com",
  projectId: "examnotes-e6e8e",
  storageBucket: "examnotes-e6e8e.firebasestorage.app",
  messagingSenderId: "407184526258",
  appId: "1:407184526258:web:c47dd1ecddb0b4c8e3f2ab",
  measurementId: "G-WYBMGCK44W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
