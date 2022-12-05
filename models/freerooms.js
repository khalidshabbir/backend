const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const rooom = new mongooose.Schema({
  Day: {
    type: String,
  },
  Lecture: {
    type: String,
  },

  Room: {
    type: String,
  }
  
});

const users = new mongoose.model("freerooms", rooom);

module.exports = users;
