// const { doctors, patients, diseases } = require("../data.js");
//Models
const Patient = require("../models/Patients");
const Disease = require("../models/Diseases");
const Doctor = require("../models/Doctors");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLEnumType,
  GraphQLNonNull,
} = require("graphql");

// Doctor Type
const DoctorType = new GraphQLObjectType({
  name: "Doctor",
  fields: () => ({
    id: { type: GraphQLID },
    drName: { type: GraphQLString },
    email: { type: GraphQLString },
    profession: { type: GraphQLString },
    phone: { type: GraphQLString },
    patient: {
      type: PatientType,
      resolve(parent, args) {
        return Patient.findById(parent.patientID);
      },
    },
  }),
});

// Patient Type
const PatientType = new GraphQLObjectType({
  name: "Patient",
  fields: () => ({
    id: { type: GraphQLID },
    patientName: { type: GraphQLString },
    age: { type: GraphQLInt },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    phone: { type: GraphQLString },
    status: { type: GraphQLString },
    drName: { type: GraphQLString },
    diagnosis: { type: GraphQLString },
    doctor: {
      type: DoctorType,
      resolve(parent, args) {
        return Doctor.findById(parent.doctorID);
      },
    },
    disease: {
      type: DiseaseType,
      resolve(parent, args) {
        return Disease.findById(parent.diseaseID);
      },
    },
  }),
});

// Disease Type
const DiseaseType = new GraphQLObjectType({
  name: "Disease",
  fields: () => ({
    id: { type: GraphQLID },
    diseaseName: { type: GraphQLString },
    symptoms: { type: GraphQLString },
    treatment: { type: GraphQLString },
    // diseaseID: { type: GraphQLID },
  }),
});

//used to get specific details of doctors, patients or diseases
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //Doctors search methods
    //used to return a list of All Doctors
    doctors: {
      type: new GraphQLList(DoctorType),
      resolve(parent, args) {
        return Doctor.find();
      },
    },
    //used to return individual Doctor
    doctor: {
      type: DoctorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Doctor.findById(args.id);
      },
    },

    //Patients search methods
    //used to return a list of patients
    patients: {
      type: new GraphQLList(PatientType),
      resolve(parent, args) {
        return Patient.find();
      },
    },
    //used to return individual patient
    patient: {
      type: PatientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Patient.findById(args.id);
      },
    },

    //Disease search methods
    //used to return a list of diseases
    diseases: {
      type: new GraphQLList(DiseaseType),
      resolve(parent, args) {
        return Disease.find({});
      },
    },
    //used to return individual diseases details
    disease: {
      type: DiseaseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Disease.findById(args.id);
      },
    },
  },
});

//Mutations

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Functions to alter data, that is add, update and delete",
  fields: {
    //Doctor Mutations
    addDoctor: {
      //used to add a new doctor
      type: DoctorType,
      args: {
        drName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        profession: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const doctor = new Doctor({
          drName: args.drName,
          email: args.email,
          profession: args.profession,
          phone: args.phone,
        });
        return doctor.save();
      },
    },
    updateDoctor: {
      //used to update a doctor details
      type: DoctorType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        drName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        profession: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Doctor.findByIdAndUpdate(
          args.id,
          {
            $set: {
              drName: args.drName,
              email: args.email,
              profession: args.profession,
              phone: args.phone,
            },
          },
          { new: true }
        );
      },
    },
    deleteDoctor: {
      //used to delete a doctor
      type: DoctorType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Doctor.findByIdAndRemove(args.id);
      },
    },

    //Patient Mutations
    addPatient: {
      //used to add a new patient
      type: PatientType,
      args: {
        patientName: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        email: { type: GraphQLNonNull(GraphQLString) },
        gender: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "Status",
            values: {
              admitted: { value: "Admitted" },
              discharged: { value: "Discharged" },
              consultation: { value: "Consultation" },
              emergency: { value: "Emergency" },
              followup: { value: "Follow Up" },
              transfer: { value: "Transfer" },
              other: { value: "Other" },
            },
          }),
          defaultValue: "Pending Review",
        },
        doctorID: { type: GraphQLNonNull(GraphQLID) },
        diseaseID: { type: GraphQLNonNull(GraphQLID) },
        drName: { type: GraphQLNonNull(GraphQLString) },
        diagnosis: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const patient = new Patient({
          patientName: args.patientName,
          age: args.age,
          email: args.email,
          gender: args.gender,
          phone: args.phone,
          status: args.status,
          doctorID: args.doctorID,
          diseaseID: args.diseaseID,
          drName: args.drName,
          diagnosis: args.diagnosis,
        });
        return patient.save();
      },
    },
    updatePatient: {
      //used to update a patient details
      type: PatientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        patientName: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        phone: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "StatusUpdate",
            values: {
              admitted: { value: "Admitted" },
              discharged: { value: "Discharged" },
              consultation: { value: "Consultation" },
              emergency: { value: "Emergency" },
              followup: { value: "Follow Up" },
              transfer: { value: "Transfer" },
              other: { value: "Other" },
            },
          }),
        },
        drName: { type: GraphQLString },
        diagnosis: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Patient.findByIdAndUpdate(
          args.id,
          {
            $set: {
              patientName: args.patientName,
              age: args.age,
              email: args.email,
              gender: args.gender,
              phone: args.phone,
              status: args.status,
              drName: args.drName,
              diagnosis: args.diagnosis,
            },
          },
          { new: true }
        );
      },
    },
    deletePatient: {
      //used to delete a patient
      type: PatientType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Patient.findByIdAndDelete(args.id);
      },
    },
    //Disease Mutations
    addDisease: {
      //used to add a new disease
      type: DiseaseType,
      args: {
        diseaseName: { type: GraphQLNonNull(GraphQLString) },
        symptoms: { type: GraphQLNonNull(GraphQLString) },
        treatment: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const disease = new Disease({
          diseaseName: args.diseaseName,
          symptoms: args.symptoms,
          treatment: args.treatment,
        });
        return disease.save();
      },
    },
    updateDisease: {
      //used to update a disease details
      type: DiseaseType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        diseaseName: { type: GraphQLNonNull(GraphQLString) },
        symptoms: { type: GraphQLNonNull(GraphQLString) },
        treatment: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Disease.findByIdAndUpdate(
          args.id,
          {
            $set: {
              diseaseName: args.diseaseName,
              symptoms: args.symptoms,
              treatment: args.treatment,
            },
          },
          { new: true }
        );
      },
    },
    deleteDisease: {
      //used to delete a disease
      type: DiseaseType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Disease.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
