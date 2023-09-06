// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACGRO5D-XfViWobSOD0yX7-PyOAWWaKuM",
  authDomain: "sigma-os.firebaseapp.com",
  projectId: "sigma-os",
  storageBucket: "sigma-os.appspot.com",
  messagingSenderId: "603455088466",
  appId: "1:603455088466:web:71213db1ae39d1b31d3c8b",
  measurementId: "G-5C3518H3XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);