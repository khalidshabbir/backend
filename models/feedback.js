const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const feedback = new mongooose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  Message: {
    type: String,
    required: true,
  },
});

const feedbackdata = new mongoose.model("feedbackdata", feedback);

module.exports = feedbackdata;
