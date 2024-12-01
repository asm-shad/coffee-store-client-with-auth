// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8bJPtkFMirP9apuHPV0Tcy6T4Zi5aco",
  authDomain: "coffee-store-6b536.firebaseapp.com",
  projectId: "coffee-store-6b536",
  storageBucket: "coffee-store-6b536.firebasestorage.app",
  messagingSenderId: "75082942587",
  appId: "1:75082942587:web:0c45aefe3b27d66f82bade",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
