const monngoose = require("mongoose");

exports.connectMongoose = () => {

    monngoose.connect("mongodb+srv://user1:@cluster0.xcbfm.mongodb.net/", {    
    }).then(() => {
        console.log("Database Connected");  
    }).catch((err) => {
        console.log(err);
    });
};