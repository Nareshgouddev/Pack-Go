const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  picture: String,
  gstint: Number,
});

module.exports = mongoose.model("Admin", adminSchema);
