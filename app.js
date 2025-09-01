const express = require("express");
const app = express();
const adminRouter = require("./routes/adminRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const db = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", adminRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(3000);
