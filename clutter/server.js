//importing necessary libraries
const mysql = require("mysql");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
//const LocalStrategy = require("passport-local").Strategy
const encoder = bodyParser.urlencoded();

app.use("/css",express.static("css"));
app.use("/js",express.static("js"));
app.use("/fonts",express.static("fonts"));
app.use("/images",express.static("images"));
app.use("/images",express.static("signupfiles"));
app.use("/images",express.static("scss"));
app.use("/images",express.static("scss/common"));

//establishing a db connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root123",
//     database: "metaverse"
// });

// //connect to the database
// connection.connect(function(error){
//     if (error) throw error
//     else console.log("Connected to the database sucessfully.")
// });

// //for reading the entered data
// app.use(express.urlencoded({extended: false}))

//posts
//insert user data to table
// app.post("/sign_up", async (req, res) => {
//     // bcrypt.genSalt(10, (err, salt) => {
//     //     bcrypt.hash(req.body.password, salt, function(err, hash){
//     //         if(err) throw err;
//             var username = req.body.username
//             var email = req.body.email
//             var hashPass = req.body.password
//             var sql = "INSERT INTO loginuser (user_name, user_pass) VALUES ('" + email + "','" + hashPass + "');"
    
//             connection.query(sql, function(err, result) {
//                 if (err) throw err;
//                 console.log("Inserted record! Signed Up!")
//             })
//             res.redirect("/success");
//         });
// //     });
// // })

// app.post("/login", function (req, res) {
//     var user = req.body.email;
//     var pass = req.body.password;
//     // connection.query("select * from loginuser where user_name = ? and user_pass = ?",[user, pass], (err, result, fields) => {
//     //     if (err) throw err;
//     //     if(result.length > 0)
//     //     {
//     //         return res.redirect("/")
//     //     }
//     //     else 
//     //     {
//     //         return res.redirect('/login');
//     //     }
//     // })
//     connection.query("select * from loginuser where user_name = ? and user_pass = ?",[user,pass],function(err,result,fields){
//         if(result.length > 0) {
//             return res.redirect("/")
//             //console.log("good2.")
//         } else {
//             return res.redirect("/login")
//             //console.log("good3.")
//         }
//         res.end();
//     })
// })


//routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
    //console.log("good1.")
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/loginEx.html')
    //console.log("good1.")
});

app.get('/cslogin', (req,res) => {
    res.sendFile(__dirname + '/views/loginCS.html')
    //console.log("good1.")
});

app.get('/success', (req,res) => {
    res.sendFile(__dirname + '/views/success.html')
    //console.log("good1.")
});

app.get('/blog', (req,res) => {
    res.sendFile(__dirname + '/views/blog.html')
    //console.log("good1.")
});

app.get('/avatar', (req,res) => {
    res.sendFile(__dirname + '/views/readyme.html')
    //console.log("good1.")
});

app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/views/contact.html')
    //console.log("good1.")
});

// app.get('/signupwithc', (req,res) => {
//     res.sendFile(__dirname + '/views/cnumsignup.html')
//     //console.log("good1.")
// });

app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/views/finalsignup.html')
    //console.log("good1.")
});

//end routes

app.listen(3000);