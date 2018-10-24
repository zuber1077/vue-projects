const mongoose = require("mongoose");

var imagesSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("Images", imagesSchema); 