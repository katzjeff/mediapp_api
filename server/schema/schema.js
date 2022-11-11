const { doctors, patients, diseases } = require("../data.js");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

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

//used to get specific patients from the list of patients
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    patient: {
      type: PatientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return patients.find((patient) => patient.id === args.id);
      },
    },
  },
}); 

module.exports = new GraphQLSchema({
  query: RootQuery,
});
