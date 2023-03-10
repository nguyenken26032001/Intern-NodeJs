const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/demoNodejs");
    console.log("connect succeessfully");
  } catch (error) {
    console.log("connect failed");
  }
}
module.exports = { connect };
