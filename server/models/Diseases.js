const mongoose = require("mongoose");

const DiseasesSchema = new mongoose.Schema({
  diseaseName: {
    type: String,
  },
  symptoms: {
    type: String,
  },
  treatment: {
    type: String,
  },
});

module.exports = mongoose.model("Disease", DiseasesSchema);
