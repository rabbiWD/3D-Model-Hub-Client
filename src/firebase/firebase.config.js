// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPq6rUwFbladS1RZaduSlBrd_i9sH9Rk",
  authDomain: "d-models-dd403.firebaseapp.com",
  projectId: "d-models-dd403",
  storageBucket: "d-models-dd403.firebasestorage.app",
  messagingSenderId: "721589120369",
  appId: "1:721589120369:web:76ff47a22993e5ef98dad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);