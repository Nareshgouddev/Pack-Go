const express = require("express");
const router = express();
const admin = require("../models/admin");

router.get("/", (req, res) => {
  res.send("hello world");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    const owner = await admin.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("You Dont have the permission to create a anew owner");
    }
    const { fullName, email, password } = req.body;

    const createdowner = await admin.create({
      fullName,
      email,
      password,
    });
    res.send(createdowner);
  });
}

module.exports = router;
