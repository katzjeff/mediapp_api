const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  patientName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    type: String,
    enum: [
      "Admitted",
      "Discharged",
      "Consultation",
      "Emergency",
      "Follow-up",
      "Transfer",
      "Other",
    ],
  },
  drName: {
    type: String,
  },
  diagnosis: {
    type: String,
  },
  doctorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  diseaseID: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "Disease",
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
