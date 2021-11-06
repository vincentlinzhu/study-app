import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { analytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";

// Add Firebase products that you want to use
import { auth } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg7RwpPsF7_r6WuxtfF6p0OzbsEXJtiB0",
  authDomain: "study-app-c1464.firebaseapp.com",
  databaseURL: "https://study-app-c1464-default-rtdb.firebaseio.com",
  projectId: "study-app-c1464",
  storageBucket: "study-app-c1464.appspot.com",
  messagingSenderId: "209008857725",
  appId: "1:209008857725:web:39f0e4a68187ac6262d714",
  measurementId: "G-TLJMC4RQRM",
};

// Initialize Firebase
initializeApp(firebaseConfig);
