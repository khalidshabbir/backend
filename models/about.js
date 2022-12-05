const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const about = new mongooose.Schema({
  name: {
    type: String,
  },
  profession: {
    type: String,
  },

  position: {
    type: String,
  },
  image: {
    
    type: String,
    default:"dumy.jpg"
  },
  description:{
    type:String
  }

});

const aboutus = new mongoose.model("aboutusdata", about);

module.exports = aboutus;
