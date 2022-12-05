const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const lectureSchema = new mongooose.Schema({
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
  Status: {
    type: Boolean,
    default:false
    
    
   
  },
});

const LectureSchmea = new mongoose.model("lectureSchema", lectureSchema);

module.exports = LectureSchmea;
