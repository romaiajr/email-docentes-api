const mongoose = require("mongoose");

const NotFoundTeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("NotFoundTeacher", NotFoundTeacherSchema);
