//Database for current student - c number ka data

const firebaseConfig = {
    apiKey: "AIzaSyC2MZze5fbmsN_q88vvc0A39EaDSccjicI",
    authDomain: "login-5939a.firebaseapp.com",
    databaseURL:"https://login-5939a-default-rtdb.firebaseio.com/",
    projectId: "login-5939a",
    storageBucket: "login-5939a.appspot.com",
    messagingSenderId: "1054671906745",
    appId: "1:1054671906745:web:aa2e162259af2eac553868"
  };

  //intialize firebase 
  firebase.initializeApp(firebaseConfig);

  //create reference database
  var LoginCSDB = firebase.database().ref('loginCS');

  document.getElementById('loginCS').addEventListener('submit',loginformCS);

  function loginformCS(e){
    e.preventDefault();

    var email = getInputVal('login-email');
    var password = getInputVal('login-password');
    var avatarlink = getInputVal('avatar-link');
    console.log(email,password,avatarlink);
    saveDetails(email,password,avatarlink);

  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveDetails(email,password,avatarlink) {
    var newLoginCS = LoginCSDB.push();
    newLoginCS.set({
         email: email,
         password: password,
         avatarlink: avatarlink
    })

  }