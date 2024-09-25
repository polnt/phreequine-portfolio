// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZvoNLyANAur8VgWcUIkXDmyrpCGyXaAg",
  authDomain: "polca-portfolio.firebaseapp.com",
  projectId: "polca-portfolio",
  storageBucket: "polca-portfolio.appspot.com",
  messagingSenderId: "198726020205",
  appId: "1:198726020205:web:b26aad0d7ea6188bdfe364"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
