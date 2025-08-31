const express = require("express");
const app = express();
const adminRouter = require("./routes/adminRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const { connectDB } = require("./config/database");

app.use("/", adminRouter);
app.use("/", productRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Connection to DB is Established");
    app.listen(3000, () => {
      console.log("Server connected Successfully");
    });
  })
  .catch((err) => {
    console.log("ERROR" + err.message);
  });
