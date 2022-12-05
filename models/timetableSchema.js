const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const timetable = new mongooose.Schema({
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
});

const users = new mongoose.model("timetabledata", timetable);

module.exports = users;
