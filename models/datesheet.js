const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const datesheet = new mongooose.Schema({
  Dayname: {
    type: String,
  },
  MonthDate: {
    type: String,
  },
  Month: {
    type: String,
  },
  Time: {
    type: String,
  },
  Year: {
    type: String,
  },
  Date: {
    type: String,
  },
  Time: {
    type: String,
  },
  Room: {
    type: String,
  },
  Section: {
    type: String,
  },
  Subjects: {
    type: String,
  },
  Invagilators: {
    type: String,
  },
});

const datesheets = new mongoose.model("datesheet", datesheet);

module.exports = datesheets;
