import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxAnpFRZHMxDSdZCnflg7MARgJ84olRyo",
  authDomain: "blog-f92cc.firebaseapp.com",
  projectId: "blog-f92cc",
  storageBucket: "blog-f92cc.firebasestorage.app",
  messagingSenderId: "75997218356",
  appId: "1:75997218356:web:0638406d0a59b86fa06c61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };