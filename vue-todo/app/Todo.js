var mongoose = require("mongoose");

// Define collection and schema for todo item

var todo = new mongoose.Schema(
  {
    name: String,
    done: Boolean
  },

  { collection: "todos" }
);

module.exports = mongoose.model("Todo", todo);
