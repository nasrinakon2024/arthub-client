import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtKCIORW_MLtrxOX3Ho3s-hrd9ZqVivm0",
  authDomain: "arthub-f18dc.firebaseapp.com",
  projectId: "arthub-f18dc",
  storageBucket: "arthub-f18dc.firebasestorage.app",
  messagingSenderId: "357997866727",
  appId: "1:357997866727:web:8a8510d97f3abdf1903c42",
  measurementId: "G-CJWKERJFCC"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // এটি যোগ করা জরুরি

export { auth, googleProvider }; // এখানে খেয়াল করো: auth এবং googleProvider দুটিই এক্সপোর্ট করা হয়েছে