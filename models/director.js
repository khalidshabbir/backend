const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const director = new mongooose.Schema({
  text: {
    type: String,
  },
  name: {
    type: String,
  },

  image: {
    type: String,
  },
});

const directrs = new mongoose.model("directorv", director);

module.exports = directrs;
