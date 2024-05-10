// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAPm7jIga3tXsGTptJynJGcWC7Ciq5FceA",
  authDomain: "login-project-20b35.firebaseapp.com",
  projectId: "login-project-20b35",
  storageBucket: "login-project-20b35.appspot.com",
  messagingSenderId: "133096877984",
  appId: "1:133096877984:web:6368bc12fdf1af5564bec5"
=======
  apiKey: "AIzaSyA6hucNfwokOEnxGhTii_5Uy36F0RULxwU",
  authDomain: "signup-project-ed800.firebaseapp.com",
  projectId: "signup-project-ed800",
  storageBucket: "signup-project-ed800.appspot.com",
  messagingSenderId: "718561903075",
  appId: "1:718561903075:web:b3ae46e0c05ff5826020d6"
>>>>>>> 9d14d42fec8d7c8bacdebda02e85f7c16b1406c4
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs
const logName = document.getElementById('email').value;
const logPassword = document.getElementById('password').value;
<<<<<<< HEAD

//submit button 
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert(5)
})
=======
//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  alert(5)
})
>>>>>>> 9d14d42fec8d7c8bacdebda02e85f7c16b1406c4
