// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB3nEZD0DQo40t_9W9PpFWcwbzLvFw1qc",
  authDomain: "without-a-trace-420f4.firebaseapp.com",
  projectId: "without-a-trace-420f4",
  storageBucket: "without-a-trace-420f4.firebasestorage.app",
  messagingSenderId: "766726836000",
  appId: "1:766726836000:web:d809bda184e6dcd5fbd145",
  measurementId: "G-M3KHE6F07R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
