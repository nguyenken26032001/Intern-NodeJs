const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-generator");
// const sofDelete = require("mongoose-softdelete");
mongoose.plugin(slug);
// const ObjectId = Schema.ObjectId;
const Course = new Schema(
  {
    name: String,
    description: String,
    price: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);
// Course.plugin(sofDelete);
module.exports = mongoose.model("Course", Course);
