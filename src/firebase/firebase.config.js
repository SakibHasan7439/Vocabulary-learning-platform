// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkeOAWpTWuckjifVth9V6Va-Adn4jb_GU",
  authDomain: "lingo-bingo-authentication.firebaseapp.com",
  projectId: "lingo-bingo-authentication",
  storageBucket: "lingo-bingo-authentication.firebasestorage.app",
  messagingSenderId: "674146549086",
  appId: "1:674146549086:web:f13bfb964071a30fdf63cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;