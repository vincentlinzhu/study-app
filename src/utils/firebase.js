import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);

export default firebase;
