
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoyxQLinJTxlHGFtb-Sl8oHywRfJM6ySk",
    authDomain: "hungrygo-database.firebaseapp.com",
    projectId: "hungrygo-database",
    storageBucket: "hungrygo-database.appspot.com",
    messagingSenderId: "625172960101",
    appId: "1:625172960101:web:70b0bd887b284c9711078c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 
  //submit button
  Submit.addeventlistener("click", function(event) {
    event.preventDefault();

     // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    
      // ..
    });
  
  })