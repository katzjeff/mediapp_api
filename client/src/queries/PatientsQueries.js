import {gql} from '@apollo/client';

const GET_PATIENTS = gql`
query getPatients {
  patients {
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


export {GET_PATIENTS};
