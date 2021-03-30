const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

feedbackSchema.index({ query: "text" });
module.exports = mongoose.model("feedback", feedbackSchema);
