import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6ADSJqbariGLShfHA2ta6G9bUZrjuNIQ",
  authDomain: "englishapp-4b8e5.firebaseapp.com",
  projectId: "englishapp-4b8e5",
  storageBucket: "englishapp-4b8e5.appspot.com",
  messagingSenderId: "983010261645",
  appId: "1:983010261645:web:ada488c45963b6686580c4",
  measurementId: "G-46RQTZ81XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);