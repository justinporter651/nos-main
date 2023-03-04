// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRW6jtXkc1UcBCiWylEmGdf8OkE_eT2c8",
  authDomain: "nos-training-facility.firebaseapp.com",
  databaseURL: "https://nos-training-facility-default-rtdb.firebaseio.com",
  projectId: "nos-training-facility",
  storageBucket: "nos-training-facility.appspot.com",
  messagingSenderId: "274695028107",
  appId: "1:274695028107:web:23793b9e8d6d39d42d438e",
  measurementId: "G-L184KKLZKT"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const analytics = firebase.analytics;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
