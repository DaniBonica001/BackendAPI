// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3xDv7Sf0ZkxeMh7kN8s9A-HUnkHFVxM",
  authDomain: "springbootprojectauth.firebaseapp.com",
  databaseURL: "https://springbootprojectauth-default-rtdb.firebaseio.com",
  projectId: "springbootprojectauth",
  storageBucket: "springbootprojectauth.appspot.com",
  messagingSenderId: "828278549531",
  appId: "1:828278549531:web:12221783f0125702541cbe"
};

export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  getAuth(app);
};

