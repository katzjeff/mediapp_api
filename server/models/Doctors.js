const mongoose = require("mongoose");

const DoctorsSchema = new mongoose.Schema({
  drName: {
    type: String,
  },
  email: {
    type: String,
  },
  profession: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Doctor", DoctorsSchema);
