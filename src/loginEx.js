//Database for explorer or alumni
import 'firebase/app';
import "firebase/auth";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA1xeb5nfkACdv5ZeJbelJvA65IADXpSCI",
    authDomain: "loginex-da8cb.firebaseapp.com",
    databaseURL: "https://loginex-da8cb-default-rtdb.firebaseio.com",
    projectId: "loginex-da8cb",
    storageBucket: "loginex-da8cb.appspot.com",
    messagingSenderId: "879847993737",
    appId: "1:879847993737:web:f3d8afe009136bc82b3158"
  };
  
//intialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

//create reference database
var LoginEXDB = firebase.database().ref('LoginEX');

document.getElementById('LoginEX').addEventListener('submit',loginformEx);

function loginformEx(e){
  e.preventDefault();

  var username = getInputVal('signup-username');
  var password = getInputVal('signup-password');
  var avatarlink = getInputVal('avatar-link');
  console.log(username,password,avatarlink);
  saveDetails(username,password,avatarlink);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveDetails(username,password,avatarlink) {
  var newLoginEX = LoginEXDB.push();
  newLoginEX.set({
        username: username,
        password: password,
        avatarlink: avatarlink
  })

}