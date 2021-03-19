const mongoose = require("mongoose");

const NotFoundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("NotFound", NotFoundSchema);
