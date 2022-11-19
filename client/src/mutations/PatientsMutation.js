import { gql } from "@apollo/client";

//Add Patients Mutation
const ADD_PATIENT = gql`
  mutation AddPatient(
    $name: String!
    $age: Int!
    $phone: String!
    $gender: String!
    $email: String!
    $status: String!
    $drName: String!
    $diagnosis: String!
  ) {
    addPatient(
      name: $name
      age: $age
      phone: $phone
      gender: $gender
      email: $email
      status: $status
      drName: $drName
      diagnosis: $diagnosis
    ) {
      id
      name
      age
      phone
      gender
      email
      status
      drName
      diagnosis
    }
  }
`;

//Deleting Patients Mutation
const DELETE_PATIENT = gql`
  mutation deletePatient($id: ID!) {
    deletePatient(id: $id) {
      id
      patientName
      age
      email
      gender
      phone
      status
      drName
      diagnosis
    }
  }
`;

export { DELETE_PATIENT, ADD_PATIENT };
