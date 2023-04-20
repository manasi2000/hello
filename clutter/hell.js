const mysql = require("mysql");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var express = require('express')
const app = express();
app.use(express.json());
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use("/css",express.static("css"));
app.use("/js",express.static("js"));
app.use("/fonts",express.static("fonts"));
app.use("/images",express.static("images"));

//establishing a db connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "metaverse"
});

//connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("Connected to the database sucessfully.")
});

// app.post("/login", function (req, res) {
//     var user = req.body.email;
//     var pass = req.body.password;
//     console.log(user);
//     console.log(pass);
//     connection.query("select * from loginuser where user_name = ? and user_pass = ?",[user, pass], async (err, result, fields) => {
//         if (err) throw err;
//         console.log()
//         // bcrypt.compare(pass, result[0]['user_pass'], function (err, result1) {
//         //     if (result1) {
//         //         res.redirect("/");
//         //     }
//         if(result.length > 0)
//         {
//             res.redirect("/")
//         }
//         else 
//         {
//             res.redirect('/login');
//         }
//     })
//     res.end()
// })
// })

app.post("/login", function (req, res) {
    var user = req.body.email;
    var pass = req.body.password;
    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[user, pass], (err, result, fields) => {
        if (err) throw err;
        if(result.length > 0)
        {
            return res.redirect("/")
        }
        else 
        {
            return res.redirect('/login');
        }
    })
    res.end()
})


//routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
    //console.log("good1.")
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
    //console.log("good1.")
});

app.get('/sign_up', (req,res) => {
    res.sendFile(__dirname + '/views/sign_up.html')
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

app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/views/contact.html')
    //console.log("good1.")
});

app.listen(4000);