import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCHUOQYJyHXv46sge6t32LUcnMP99n2FB4",
  authDomain: "facebookvue-c7943.firebaseapp.com",
  projectId: "facebookvue-c7943",
  storageBucket: "facebookvue-c7943.appspot.com",
  messagingSenderId: "314012624390",
  appId: "1:314012624390:web:dd88bcb4f6aed902580587",
  measurementId: "G-DDK6KN2LDY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);