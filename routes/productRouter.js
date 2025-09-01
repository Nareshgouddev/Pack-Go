const express = require("express");

const router = express();

router.get("/product", (req, res) => {
  res.send("hello world");
});

module.exports = router;
