const express = require("express");
const User = require("../models/usermodel");
const router = express();
const registerUser = require("../controllers/authcontroller");

router.get("/user", (req, res) => {
  res.send("hello world");
});

router.post("/register", registerUser);

module.exports = router;
