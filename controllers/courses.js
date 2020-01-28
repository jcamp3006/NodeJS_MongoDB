const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add", (req, res) => {

    res.render("add-course");

})

router.post("/add", (req, res) => {

    console.log(req.body);

    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseId = Math.ceil(Math.random() * 100000000);

    course.save((err, doc) => {

        if(!err){

            res.redirect("/course/list");
            // res.json({ message : "successful", status : "OK"}); // use to convert to restful API

        }
        else{

            res.send("Error Occured");

        }

    });

    // res.render("add-course");

})

router.get("/list", (req, res) => {    

    //Getting
    CourseModel.find((err, docs) => {

        if(!err){

            console.log(docs);
            res.render("list",  { data : docs });

        }
        else{

            res.send("Error");

        }

    });

    // res.send("Course Controller");

});

module.exports = router;