const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("signedInusers", signInSchema);
