// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6hucNfwokOEnxGhTii_5Uy36F0RULxwU",
  authDomain: "signup-project-ed800.firebaseapp.com",
  projectId: "signup-project-ed800",
  storageBucket: "signup-project-ed800.appspot.com",
  messagingSenderId: "718561903075",
  appId: "1:718561903075:web:b3ae46e0c05ff5826020d6"
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
