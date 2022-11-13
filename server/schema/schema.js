const { doctors, patients, diseases } = require("../data.js");
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
        return doctors;
      },
    },
    //used to return individual Doctor
    doctor: {
      type: DoctorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return doctors.find((doctor) => doctor.id === args.id);
      },
    },

    //Patients search methods
    //used to return a list of patients
    patients: {
      type: new GraphQLList(PatientType),
      resolve(parent, args) {
        return patients;
      },
    },
    //used to return individual patient
    patient: {
      type: PatientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return patients.find((patient) => patient.id === args.id);
      },
    },

    //Disease search methods
    //used to return a list of diseases
    diseases: {
      type: new GraphQLList(DiseaseType),
      resolve(parent, args) {
        return diseases;
      },
    },
    //used to return individual diseases details
    disease: {
      type: DiseaseType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return diseases.find((disease) => disease.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
