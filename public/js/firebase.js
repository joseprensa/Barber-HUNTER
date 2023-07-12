  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhr8iOH6lFZbyt4Vi_w3ShuFeSU0F1IY0",
    authDomain: "barber-hunter-efd92.firebaseapp.com",
    projectId: "barber-hunter-efd92",
    storageBucket: "barber-hunter-efd92.appspot.com",
    messagingSenderId: "62488294722",
    appId: "1:62488294722:web:d651aa084185d0b51984db",
    measurementId: "G-40B853GZ0P"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);