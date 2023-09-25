// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase,
  authDomain: "blog-app-3da38.firebaseapp.com",
  projectId: "blog-app-3da38",
  storageBucket: "blog-app-3da38.appspot.com",
  messagingSenderId: "88541742051",
  appId: "1:88541742051:web:63cbfb67ffb6e19d7a16d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
