const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  feedback: {
    type: String,
  },
});

module.exports = mongoose.model("queries", querySchema);
