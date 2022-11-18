import { gql } from "@apollo/client";

//Deleting clients
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

export { DELETE_PATIENT };