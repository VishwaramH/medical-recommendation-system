const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    message: "Email address already taken"
  },
  password: {
    type: String,
    required: true,
  },
  receive: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", signupSchema);
