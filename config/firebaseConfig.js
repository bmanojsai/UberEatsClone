// Import the functions you need from the SDKs you needimport firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat";
import {FIREBASE_API_KEY} from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "ubereatsclonebase.firebaseapp.com",
  projectId: "ubereatsclonebase",
  storageBucket: "ubereatsclonebase.appspot.com",
  messagingSenderId: "672848146293",
  appId: "1:672848146293:web:830508dcf85d806e02ed3c"
};

console.log("This is excuting")
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;