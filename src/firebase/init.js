// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk20KSiypRCbwoNPcMIhmKtUm3Mic-5P8",
  authDomain: "fes-firebase-mini-project.firebaseapp.com",
  projectId: "fes-firebase-mini-project",
  storageBucket: "fes-firebase-mini-project.firebasestorage.app",
  messagingSenderId: "989113096959",
  appId: "1:989113096959:web:ef103a34a44a9e863a8aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();