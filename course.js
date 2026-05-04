const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String
});

module.exports = mongoose.model("Course", courseSchema);