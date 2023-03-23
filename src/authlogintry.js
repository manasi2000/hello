import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xeb5nfkACdv5ZeJbelJvA65IADXpSCI",
  authDomain: "loginex-da8cb.firebaseapp.com",
  databaseURL: "https://loginex-da8cb-default-rtdb.firebaseio.com",
  projectId: "loginex-da8cb",
  storageBucket: "loginex-da8cb.appspot.com",
  messagingSenderId: "879847993737",
  appId: "1:879847993737:web:f3d8afe009136bc82b3158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signex.addEventListener('click',(e) => {

  var avatar = document.getElementById('alink').value;
  var password = document.getElementById('pass').value;
  var username = document.getElementById('uname').value;

  createUserWithEmailAndPassword(avatar, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

    //   set(ref(database, 'users/' + user.uid),{
    //       username: username,
    //       email: email
    //   })

      alert('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });

});

login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
            update(ref(database, 'users/' + user.uid),{
            last_login: dt,
        })

            alert('User loged in!');
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});

logout.addEventListener('click',(e)=>{

   signOut(auth).then(() => {
     // Sign-out successful.
     alert('user loged out');
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;
     
     alert(errorMessage);
   });

});