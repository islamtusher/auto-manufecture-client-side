// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB56u17e8mSDYiUJNEvVTpz8Pc5_xMNna0",
  authDomain: "auto-manufac.firebaseapp.com",
  projectId: "auto-manufac",
  storageBucket: "auto-manufac.appspot.com",
  messagingSenderId: "1088691814967",
  appId: "1:1088691814967:web:72004857a3a5ab757fb5b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth