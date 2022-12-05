const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const aboutus = new mongooose.Schema({
  description: {
    type: String,
  },
});

const aboutusp = new mongoose.model("aboutusparagraph", aboutus);

module.exports = aboutusp;
