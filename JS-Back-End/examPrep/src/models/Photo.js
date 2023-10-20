const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [2, "Name should be atleast 2 characters!"],
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
  },
  age: {
    type: Number,
    required: [true, "Age is required!"],
    min: 1,
    max: 100,
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: 5,
    maxlength: 50,
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
