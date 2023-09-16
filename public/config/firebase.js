// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8XGy8cm79drovCcTIWq-m-DG8AXo18xg",
  authDomain: "barber-hurt.firebaseapp.com",
  databaseURL: "https://barber-hurt-default-rtdb.firebaseio.com",
  projectId: "barber-hurt",
  storageBucket: "barber-hurt.appspot.com",
  messagingSenderId: "178904968555",
  appId: "1:178904968555:web:068d5610d7bc5bde87f02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
