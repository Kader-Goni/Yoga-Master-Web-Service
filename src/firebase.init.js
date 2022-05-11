// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl2YfIM3ES7MF99Wehl2HxTQzaWGIQ0N0",
  authDomain: "yoga-master-web-service.firebaseapp.com",
  projectId: "yoga-master-web-service",
  storageBucket: "yoga-master-web-service.appspot.com",
  messagingSenderId: "1036576399998",
  appId: "1:1036576399998:web:c27b223a49ed4d0e28ae2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;