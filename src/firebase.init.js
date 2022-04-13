// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClDT7vzoDlXgyMFIlcvrphUDdmtw8SnCU",
  authDomain: "bhalo-automobile-a234f.firebaseapp.com",
  projectId: "bhalo-automobile-a234f",
  storageBucket: "bhalo-automobile-a234f.appspot.com",
  messagingSenderId: "232115559769",
  appId: "1:232115559769:web:820efcad7781431efc4048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;