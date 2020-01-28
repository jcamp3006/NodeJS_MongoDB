const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Edureka", { useNewUrlParser: true }, (error) => {

    if(!error){

        console.log("Connection Success!");

    }
    else{

        console.log("Error connecting to database.");

    }

});

const Course = require("./course.model");