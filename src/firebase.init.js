import {getAuth} from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLuRiX6IfgWPawaeZrHPZfA3XRMrl32Yg",
  authDomain: "bhalo-automobile.firebaseapp.com",
  projectId: "bhalo-automobile",
  storageBucket: "bhalo-automobile.appspot.com",
  messagingSenderId: "803821482601",
  appId: "1:803821482601:web:06ac41ed5b9aea9857e8f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;