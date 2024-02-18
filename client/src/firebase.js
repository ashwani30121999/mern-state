// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-9295f.firebaseapp.com",
  projectId: "mernestate-9295f",
  storageBucket: "mernestate-9295f.appspot.com",
  messagingSenderId: "1053101571029",
  appId: "1:1053101571029:web:692bf60f3ae37d79551b5c",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
