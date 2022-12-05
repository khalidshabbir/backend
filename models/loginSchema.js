const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");
const jwt = require("jsonwebtoken");
const logindata = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});

const login = new mongoose.model("logindata", logindata);

module.exports = login;
