// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg7RwpPsF7_r6WuxtfF6p0OzbsEXJtiB0",
  authDomain: "study-app-c1464.firebaseapp.com",
  projectId: "study-app-c1464",
  storageBucket: "study-app-c1464.appspot.com",
  messagingSenderId: "209008857725",
  appId: "1:209008857725:web:39f0e4a68187ac6262d714",
  measurementId: "G-TLJMC4RQRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});
