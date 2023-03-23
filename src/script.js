const firebaseConfig = {
    apiKey: "AIzaSyAPtcCDNgO8wVzKeozv9mShZ7WI8fvPNxI",
    authDomain: "details-b1795.firebaseapp.com",
    databaseURL: "https://details-b1795-default-rtdb.firebaseio.com",
    projectId: "details-b1795",
    storageBucket: "details-b1795.appspot.com",
    messagingSenderId: "841403999697",
    appId: "1:841403999697:web:465cdc93090e4d29c0acf0"
  };
    //intialize firebase 
    firebase.initializeApp(firebaseConfig);
  
    //create reference database
    var DetailsDB = firebase.database().ref('StudentDetails');
  
    document.getElementById('details').addEventListener('submit',detailsform);
  
    function detailsform(e){
      e.preventDefault();
  
      var name = getInputVal('name');
      var eno = getInputVal('eno');
      var role =getInputVal('role');
      var course = getInputVal('course');
      var department = getInputVal('dept');
      var yearofjoining = getInputVal('joiningyear');
      var yearofgrad = getInputVal('yearofgrad');
      var avatarlink = getInputVal('avatarlink');

      console.log(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink);
      saveDetails(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink);
  
    }
    
    function getInputVal(id){
      return document.getElementById(id).value;
    }
  
    function saveDetails(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink) {
      var newDetailsDB = DetailsDB.push();
      newDetailsDB.set({
           name:name,
           eno: eno,
           role:role,
           course:course,
           department:department,
           yearofjoining:yearofjoining,
           yearofgrad:yearofgrad,
           avatarlink:avatarlink,
      })
  
    }