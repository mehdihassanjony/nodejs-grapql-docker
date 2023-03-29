var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
var ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
