const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");
const MONGODB_URL = require("./development.json");

const connectDB = async () => {
  await mongoose.connect(`${config.get("MONGODB_URL")}/pick-Go`);
};

connectDB()
  .then(() => {
    dbgr("Connection to DB is Established");
  })
  .catch((err) => {
    dbgr("ERROR" + err.message);
  });
