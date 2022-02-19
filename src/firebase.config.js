// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0vUlqxlE8tLM-HV0rgihJb3rl-Z81eIs",
  authDomain: "react-fb-auth-d9982.firebaseapp.com",
  projectId: "react-fb-auth-d9982",
  storageBucket: "react-fb-auth-d9982.appspot.com",
  messagingSenderId: "272812308690",
  appId: "1:272812308690:web:d6a3d67b6462d8e634150b",
  measurementId: "G-VLJC79DT0H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const analytics = getAnalytics(app);