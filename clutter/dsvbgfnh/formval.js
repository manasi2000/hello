// cnum login

const firebaseConfig = {
    apiKey: "AIzaSyBIiY_lfzjTuhWQwLQt1SBSTMWE49Vi5Tc",
    authDomain: "meetcummins.firebaseapp.com",
    databaseURL: "https://meetcummins-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "meetcummins",
    storageBucket: "meetcummins.appspot.com",
    messagingSenderId: "497902985571",
    appId: "1:497902985571:web:a7f968287880ecc66bf356",
    measurementId: "G-NE60V44K1R"
};

//intialize firebase 
firebase.initializeApp(firebaseConfig);

//create reference database
var DetailsDB = firebase.database().ref('users');

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
var avatarlink=getInputVal('avatarlink');

console.log(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink);
saveDetails(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink);

}

function getInputVal(id){
return document.getElementById(id).value;
}

function saveDetails(name,eno,role,course,department,yearofjoining,yearofgrad,avatarlink) {
var newDetailsDB = firebase.database().ref('users').push();
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