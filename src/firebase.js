import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqzlUN2oYSO5f2_CG28U_b6UrJLw0li3c",
  authDomain: "react-firebase-auth-63a1c.firebaseapp.com",
  projectId: "react-firebase-auth-63a1c",
  storageBucket: "react-firebase-auth-63a1c.appspot.com",
  messagingSenderId: "428372617240",
  appId: "1:428372617240:web:c4cab27a032dd7ba9afb6d",
  measurementId: "G-FXL72YRVLS"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};