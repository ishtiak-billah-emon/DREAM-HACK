// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDlGusoGHLly55_OzMJUHG1plc3TKU-w4E",
  // authDomain: "dreamhack02-4f0e7.firebaseapp.com",
  // projectId: "dreamhack02-4f0e7",
  // storageBucket: "dreamhack02-4f0e7.firebasestorage.app",
  // messagingSenderId: "163011679028",
  // appId: "1:163011679028:web:a12630ec0297da7bf08b61",
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectID : import.meta.env.VITE_projectID,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
