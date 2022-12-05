const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const contact = new mongooose.Schema({
  phone: {
    type: String,
  },
  email: {
    type: String,
  },

  address: {
    type: String,
  },
});

const contacts = new mongoose.model("contactus", contact);

module.exports = contacts;
