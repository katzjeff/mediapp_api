const { doctors, patients, diseases } = require("../data.js");
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
      }
    }
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
    disease: {
      type: DiseaseType,
      resolve(parent, args) {
        return Disease.findById(parent.diseaseID);
      }
    },
    doctor: {
      type: DoctorType,
      resolve(parent, args) {
        return Doctor.findById(parent.doctorID);
      }
    }
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
  }),
});

//used to get specific details of doctors, patients or diseases
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //Doctors search methods
    //used to return a list of Doctors
    doctors: {
      type: new GraphQLList(DoctorType),
      resolve(parent, args) {
       return Doctor.find({});
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
        return Patient.find({});
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

module.exports = new GraphQLSchema({
  query: RootQuery,
});
