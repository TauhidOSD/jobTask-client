// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5oMxxAuBuwhMR0UGYZQ-Mhsl49Mr9R7s",
  authDomain: "jobtask-bd991.firebaseapp.com",
  projectId: "jobtask-bd991",
  storageBucket: "jobtask-bd991.appspot.com",
  messagingSenderId: "202023773661",
  appId: "1:202023773661:web:df2dd8487f7d9d25408234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;