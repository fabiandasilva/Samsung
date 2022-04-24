// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5zv0ac9JzeSXnhs-ar9NrUH0GuGKPemw",
  authDomain: "prueba-c52a1.firebaseapp.com",
  projectId: "prueba-c52a1",
  storageBucket: "prueba-c52a1.appspot.com",
  messagingSenderId: "51042582799",
  appId: "1:51042582799:web:103f4eb5eec068fdd83e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}