const mongoose = require("mongoose");
async function connectMongoDB(url) {
  console.log("MongoDB connection established");
  return mongoose.connect(url);
}
module.exports = {
  connectMongoDB,
};
