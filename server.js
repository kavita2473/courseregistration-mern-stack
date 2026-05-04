const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Course = require("./models/Course");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/courseDB")
.then(() => console.log("MongoDB Connected"));

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// REGISTER COURSE
app.post("/register-course", async (req, res) => {
  const data = new Course(req.body);
  await data.save();
  res.send("Course Registered");
});

// GET COURSES
app.get("/courses", async (req, res) => {
  const data = await Course.find();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on 5000"));