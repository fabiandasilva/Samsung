// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDscoe89ZtzF3eCUDzUrvDwFGgAAfouOD4",
  authDomain: "samsung-ae8e3.firebaseapp.com",
  projectId: "samsung-ae8e3",
  storageBucket: "samsung-ae8e3.appspot.com",
  messagingSenderId: "1079828583273",
  appId: "1:1079828583273:web:7c17e62e66d6c3ff9c63f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}