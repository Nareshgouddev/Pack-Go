const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requiores: true,
    minLength: 3,
    maxLength: 30,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: {
    type: Number,
    required: true,
  },
  picURL: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
