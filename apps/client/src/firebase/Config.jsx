// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfkob7l5iXMSoG7WGIdE9oH7luCJ16rbc",
    authDomain: "attendylog-app.firebaseapp.com",
    projectId: "attendylog-app",
    storageBucket: "attendylog-app.appspot.com",
    messagingSenderId: "500576536249",
    appId: "1:500576536249:web:413bdea99d45fa37cbfd68",
    measurementId: "G-63Z0KEDBGY"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase;