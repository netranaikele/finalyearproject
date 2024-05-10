// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPm7jIga3tXsGTptJynJGcWC7Ciq5FceA",
  authDomain: "login-project-20b35.firebaseapp.com",
  projectId: "login-project-20b35",
  storageBucket: "login-project-20b35.appspot.com",
  messagingSenderId: "133096877984",
  appId: "1:133096877984:web:6368bc12fdf1af5564bec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs
const logName = document.getElementById('email').value;
const logPassword = document.getElementById('password').value;

//submit button 
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert(5)
})