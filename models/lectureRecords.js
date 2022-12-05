const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const LectureRecord = new mongooose.Schema({
  Subjects: {
    type: String,
  },
  Classess: {
    type: String,
  },

  Lecture: {
    type: String,
  },
  Day: {
    type: String,
  },
  Teacher: {
    type: String,
  },
  Room: {
    type: String,
  },
  Option: {
    type: String,
    default:"Yes"
  },
  Comment: {
    type: String,
  },
  Report: {
    type: String,
  },
  Date: {
    type: String,
  },
});

const LectureRecords = new mongoose.model("LecturesData", LectureRecord);

module.exports = LectureRecords;
