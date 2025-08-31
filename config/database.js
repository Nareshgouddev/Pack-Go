const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ediganareshgoud406_db_user:SGBNHLxTazBUbath@cluster0.ybaakxx.mongodb.net/pick-Go"
  );
};

module.exports = { connectDB };
