const express = require("express");
const {connectMongoose} = require("./database.js");
const {User} = require("./models/user.js");



//Creating Server
const app = express();


//using packages
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Database Connection
connectMongoose();

//Api calls
app.get("/", (res, req) => {
    req.send("hello world")
    
});

app.post("/signup", async(req, res) => {
    const user = await User.findOne({username : req.body.username});

    if (user) return res.status(400).send("User already exists");


    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
});



//Listening Server
app.listen(3000, (res, req) => {
    console.log("Server is listening on 3000");
})